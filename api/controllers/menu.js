import Menu from '../models/menu';
import Meal from '../models/meals';
import Caterer from '../models/caterer';

class MenuController {
  static generateDate() {
    const date = new Date();
    const month = `${date.getMonth() + 1}`;
    const today = `${date.getFullYear()}-${month.padStart(2, '0')}-${date.getDate()}`;
    return today;
  }

  static async getMenus(req, res) {
    try {
      const today = MenuController.generateDate();
      const menus = await Menu.findAll({
        where: { createdAt: today },
        include: [
          {
            model: Caterer,
            attributes: ['catering_service']
          }
        ]
      });
      return res.status(200).json({
        status: 'success',
        message: 'Menus Retrieved',
        data: menus
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'Failed To Fetch Menus',
        error: error.message
      });
    }
  }

  static async getSingleMenu(req, res) {
    const today = MenuController.generateDate();
    const menu = await Menu.findOne({ where: { createdAt: today, catererId: req.caterer.id } });
    return res.status(200).json({
      status: 'success',
      message: 'Caterer Menu Retrieved',
      data: menu
    });
  }

  static async addMealToMenu(req, res) {
    try {
      const { mealId, quantity } = req.body;
      const meal = await Meal.findOne({ where: { id: mealId, catererId: req.caterer.id } });
      if (!meal) {
        throw new Error(`Meal with that ID Doesn't exist for this caterer`);
      }
      const { createdAt, updatedAt, ...safeMeal } = meal.dataValues;
      safeMeal.quantity = Number(quantity);
      const today = MenuController.generateDate();
      const menu = await Menu.findAll({ where: { catererId: req.caterer.id, createdAt: today } });
      let menuMeals;
      if (menu.length === 0) {
        menuMeals = await MenuController.createNewMenu({
          meal: safeMeal,
          catererId: req.caterer.id,
          quantity,
          mealId
        });
      } else {
        menuMeals = await MenuController.updateMeals(menu[0], safeMeal, mealId);
        await MenuController.updateMenu({ menuMeals, today, mealId, catererId: req.caterer.id });
      }
      return res.status(200).json({
        status: 'success',
        message: 'Menu Updated',
        data: menuMeals
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  }

  static async createNewMenu({ meal, catererId, quantity, mealId }) {
    const menuMeals = [];
    menuMeals.push(meal);
    await Menu.create({
      meals: JSON.stringify(menuMeals),
      catererId
    });
    await Meal.update({ quantity }, { where: { id: mealId } });
    return menuMeals;
  }

  static async updateMenu({ menuMeals, today, mealId, catererId }) {
    try {
      await Menu.update(
        { meals: JSON.stringify(menuMeals) },
        { where: { catererId, createdAt: today } }
      );
      const mealIndex = menuMeals.findIndex(menuMeal => menuMeal.id === Number(mealId));
      await Meal.update({ quantity: menuMeals[mealIndex].quantity }, { where: { id: mealId } });
    } catch (error) {
      throw new Error('Failed to Update Menu');
    }
  }

  static async updateMeals(menu, safeMeal, mealId) {
    const { meals } = menu.dataValues;
    const updatedMenuMeals = JSON.parse(meals);
    const mealIndex = updatedMenuMeals.findIndex(menuMeal => menuMeal.id === Number(mealId));
    if (mealIndex < 0) {
      updatedMenuMeals.push(safeMeal);
    } else {
      updatedMenuMeals[mealIndex] = { ...safeMeal };
    }
    return updatedMenuMeals;
  }
}

export default MenuController;
