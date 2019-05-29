(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(e,t,a){e.exports={Form_wrapper:"Form_Form_wrapper__QqSsD",Form_page:"Form_Form_page__7wk-h",Page_form:"Form_Page_form__4SeNr",Form_group:"Form_Form_group__1phnD",Form_field:"Form_Form_field__3UJZr",Invalid:"Form_Invalid__2diAN",Page_link:"Form_Page_link__1y_3j"}},102:function(e,t,a){"use strict";var n=a(18),l=a(19),o=a(21),r=a(20),i=a(22),s=a(0),c=a.n(s);t.a=function(e,t){return function(a){function s(){var e,t;Object(n.a)(this,s);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(r.a)(s)).call.apply(e,[this].concat(l)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(i.a)(s,a),Object(l.a)(s,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){if(e.setState({error:null}),"http://localhost:7000/api/v1/"===t.baseURL&&!t.headers.Authorization){var a=t.headers["X-Req"]?localStorage.getItem("c_token"):localStorage.getItem("token");a&&(t.headers.Authorization=a)}return t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return c.a.createElement(e,this.props)}}]),s}(s.Component)}},103:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(101),r=a.n(o);t.a=function(e){var t=null,a=[r.a.Form_field];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(r.a.Invalid),e.elementType){case"input":t=l.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=l.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=l.a.createElement("select",{className:a.join(" "),onChange:e.changed},e.elementConfig.options.map(function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=l.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return l.a.createElement("div",{className:r.a.Form_group},t)}},104:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(105),r=a.n(o),i=a(106),s=a.n(i);t.a=function(e){var t="Empty "+e.text,a=l.a.createElement("span",{className:"Red"},e.text);return l.a.createElement("div",{className:r.a.Empty},l.a.createElement("img",{src:s.a,alt:t}),l.a.createElement("p",{className:r.a.EmptyText},"Empty ",a))}},105:function(e,t,a){e.exports={Empty:"Empty_Empty__3FLfD",EmptyText:"Empty_EmptyText__U9qLT"}},106:function(e,t,a){e.exports=a.p+"static/media/empty.093f05ea.svg"},107:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",function(){return n})},108:function(e,t,a){e.exports={Menu:"Menu_Menu__1Ul2_",Menu__label:"Menu_Menu__label__1rxRj",Menu__food:"Menu_Menu__food__1N5xH",Right__Btn__lg:"Menu_Right__Btn__lg__2AJxY"}},109:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(110),r=a.n(o);t.a=function(e){var t="meal",a="mealdetails",n="mealname",o="mealprice",i="mealquantity",s={menu:l.a.createElement("div",{className:r.a.Menu__food__item__details,role:a},l.a.createElement("div",{className:r.a.Meal__info},l.a.createElement("p",{role:n},e.meal.name),l.a.createElement("p",{role:o},"$",e.meal.price.toFixed(2))),l.a.createElement("div",null,l.a.createElement("button",{className:r.a.Card__btn,onClick:function(){return e.order(e.meal.id)}},"Order"))),orders:l.a.createElement("div",{className:r.a.Menu__food__item__details,role:a},l.a.createElement("div",{className:r.a.Meal__info},l.a.createElement("p",{role:n},e.meal.name),l.a.createElement("p",{role:o},"$",e.meal.price.toFixed(2)),l.a.createElement("p",null,l.a.createElement("button",{className:r.a.Tiny__btn,onClick:function(){return e.decreaseQuantity(e.meal.orderId)}},"-")," ",e.meal.quantity," ",l.a.createElement("button",{className:r.a.Tiny__btn,onClick:function(){return e.increaseQuantity(e.meal.orderId)}},"+"))),l.a.createElement("div",{className:r.a.Meal__btn},l.a.createElement("button",{className:r.a.Card__btn,onClick:function(){return e.deleteOrder(e.meal.orderId)}},"Delete"))),menuMeals:l.a.createElement("div",{className:r.a.Menu__food__item__details,role:a},l.a.createElement("div",{className:r.a.Meal__info},l.a.createElement("p",{role:n},e.meal.name),l.a.createElement("p",{role:o},"$",e.meal.price.toFixed(2)),l.a.createElement("p",{role:i},"Quantity: ",e.meal.quantity))),mealOptions:l.a.createElement("div",{className:r.a.Menu__food__item__details,role:a},l.a.createElement("div",{className:r.a.Meal__info},l.a.createElement("p",{role:n},e.meal.name),l.a.createElement("p",{role:o},"$",e.meal.price.toFixed(2))),l.a.createElement("div",{className:r.a.Meal__btn},l.a.createElement("button",{className:r.a.Card__btn,onClick:function(){return e.showEditMealModal(e.meal)}},"Edit")),l.a.createElement("div",{className:r.a.Meal__btn},l.a.createElement("button",{className:r.a.Card__btn,onClick:function(){return e.removeMeal(e.meal.id)}},"Delete"))),manageMenu:l.a.createElement("div",{className:r.a.Menu__food__item__details,role:a},l.a.createElement("div",{className:r.a.Meal__info},l.a.createElement("p",{role:n},e.meal.name),l.a.createElement("p",{role:o},"$",e.meal.price.toFixed(2)),l.a.createElement("p",null,l.a.createElement("button",{className:r.a.Tiny__btn,onClick:function(){return e.decrease(e.meal.id)}},"-")," ",e.meal.quantity||0," ",l.a.createElement("button",{className:r.a.Tiny__btn,onClick:function(){return e.increase(e.meal.id)}},"+"))))},c="".concat("http://localhost:7000/").concat(e.meal.imageUrl);return l.a.createElement("article",{className:r.a.Menu__food__item,role:t},e.meal.quantity>0&&"manageMenu"===e.type?l.a.createElement("div",{className:"ribbon ribbon-top-left"},l.a.createElement("span",null,"Selected")):null,l.a.createElement("div",{className:r.a.Menu__food__item__img},l.a.createElement("img",{src:c,alt:"Meal"})),s[e.type])}},110:function(e,t,a){e.exports={Menu__food__item:"Meal_Menu__food__item__2OJ21",Menu__food__item__img:"Meal_Menu__food__item__img__1Yo1D",Menu__food__item__details:"Meal_Menu__food__item__details__2pvx9",Meal__info:"Meal_Meal__info__2jhlT",Card__btn:"Meal_Card__btn__2rLEQ",Tiny__btn:"Meal_Tiny__btn__2poCu",Cart__container:"Meal_Cart__container__2_1QQ",Meal__btn:"Meal_Meal__btn__nk-Jf"}},113:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(13),r=a(108),i=a.n(r),s=a(109);t.a=function(e){var t=e.meals.map(function(t){return l.a.createElement(s.a,Object.assign({key:t.id,meal:t},e))}),a=["page-section"],n=null,r=null;switch(e.type){case"orders":a.push(i.a.Cart__container),r=l.a.createElement("button",{className:i.a.Right__Btn__lg,onClick:e.checkout},"Make Order");break;case"manageMenu":r=l.a.createElement("button",{className:["Btn",i.a.Right__Btn__lg].join(" "),onClick:e.saveMenu},"Save");break;case"menuMeals":n=l.a.createElement(o.b,{to:"/admin/menu",className:["Btn",i.a.Right__Btn__lg].join(" ")},"Manage Menu");break;case"mealOptions":n=l.a.createElement("button",{className:["Btn",i.a.Right__Btn__lg].join(" "),onClick:e.toggleMealModal},"Add Meal Option")}return l.a.createElement("section",{className:a.join(" "),role:"meallist"},n,l.a.createElement("div",{className:i.a.Menu__food},t),r)}},115:function(e,t,a){e.exports={Modal:"Modal_Modal__2Pcs3",Modal__header:"Modal_Modal__header__2JRRy",Modal__title:"Modal_Modal__title__2vyE-",Close:"Modal_Close__zmcgb",Modal__body:"Modal_Modal__body__1CQOc",Modal__content:"Modal_Modal__content__11UpQ",Modal__footer:"Modal_Modal__footer__2Gwm3",Hidden:"Modal_Hidden__340aA",Meal__Details__img:"Modal_Meal__Details__img__24T8R"}},118:function(e,t,a){"use strict";var n=a(107),l=a(18),o=a(19),r=a(21),i=a(20),s=a(22),c=a(0),m=a.n(c),d=a(115),u=a.n(d),_=function(e){var t=e.classes;return m.a.createElement("h3",{className:t.Modal__title},m.a.createElement("span",{className:"Red"},"B"),"ook ",m.a.createElement("span",{className:"Red"},"A")," Mea",m.a.createElement("span",{className:"Red"},"l")," ",e.title)},p=a(43),h=a(2),f=a(103),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={quantityControls:{quantity:{elementType:"input",elementConfig:{type:"number",name:"quantity",placeholder:"Quantity",min:0,max:a.props.meal?a.props.meal.quantity:0},value:"",validation:{required:!0},valid:!1,touched:!1},mealId:{elementType:"input",elementConfig:{type:"hidden",name:"mealId"},value:a.props.meal?a.props.meal.id:"",validation:{},valid:!0,touched:!0}},checkoutControls:{billingAddress:{elementType:"input",elementConfig:{type:"text",name:"billing-address",placeholder:"Billing Address"},value:"",validation:{required:!0},valid:!1,touched:!1},city:{elementType:"input",elementConfig:{type:"text",name:"city",placeholder:"City"},value:"",validation:{required:!0},valid:!1,touched:!1}},mealControls:{name:{elementType:"input",elementConfig:{type:"text",name:"name",placeholder:"Meal Name"},value:a.props.edittingMeal?a.props.edittingMeal.name:"",validation:{required:!0},valid:!1,touched:!1},price:{elementType:"input",elementConfig:{type:"number",name:"price",placeholder:"Meal Price",min:10},value:a.props.edittingMeal?a.props.edittingMeal.price:"",validation:{required:!0,isNumeric:!0},valid:!1,touched:!1},image:{elementType:"input",elementConfig:{type:"file",name:"image",placeholder:"Meal Image"},value:"",files:[],validation:{required:!a.props.edittingMeal},valid:!1,touched:!1}},formIsValid:!1},a.inputChangeHandler=function(e,t,l){var o,r={checkout:"checkoutControls",quantity:"quantityControls",meal:"mealControls"}[l],i=Object(h.b)(a.state[r][t],{value:e.target.value,valid:Object(h.a)(e.target.value,a.state[r][t].validation),touched:!0});i.files&&(i.files=Object(n.a)(e.target.files));var s=Object(h.b)(a.state[r],Object(p.a)({},t,i)),c=!0;for(var m in s)c=s[m].valid&&c;a.setState((o={},Object(p.a)(o,r,s),Object(p.a)(o,"formIsValid",c),o))},a.addToOrders=function(e){e.preventDefault();var t={};for(var n in a.state.quantityControls)t[n]=a.state.quantityControls[n].value,"number"===a.state.quantityControls[n].elementConfig.type&&(t[n]=Number(a.state.quantityControls[n].value));a.props.addMealToOrders(t)},a.handleMealForm=function(e){e.preventDefault();var t=new FormData;for(var n in a.state.mealControls){var l=null;switch(a.state.mealControls[n].elementConfig.type){case"text":l=a.state.mealControls[n].value;break;case"number":l=Number(a.state.mealControls[n].value);break;case"file":l=a.state.mealControls[n].files[0]?a.state.mealControls[n].files[0]:"";break;default:l=a.state.mealControls[n].value}t.append(n,l),"image"===n&&""===l&&t.delete(n)}a.props.edittingMeal?a.props.editMeal(a.props.edittingMeal.id,t):a.props.addMeal(t)},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.state.quantityControls).map(function(t){return{id:t,config:e.state.quantityControls[t]}}),a=Object.keys(this.state.checkoutControls).map(function(t){return{id:t,config:e.state.checkoutControls[t]}}),n=Object.keys(this.state.mealControls).map(function(t){return{id:t,config:e.state.mealControls[t]}}),l=this.props.classes,o=m.a.createElement("form",{action:"#",method:"post",id:"checkoutForm"},m.a.createElement("div",{className:l.Modal__body},a.map(function(t){return m.a.createElement(f.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,changed:function(a){return e.inputChangeHandler(a,t.id,"checkout")}})})),m.a.createElement("div",{className:l.Modal__footer},m.a.createElement("button",{type:"button","data-dismiss":"modal",onClick:this.props.closeModal},"Close"),m.a.createElement("button",{type:"submit"},"Checkout"))),r=this.props.meal?"".concat("http://localhost:7000/").concat(this.props.meal.imageUrl):null;return{quantity:this.props.meal?m.a.createElement("form",{method:"post",id:"addToOrders",onSubmit:this.addToOrders},m.a.createElement("div",{className:l.Modal__body},m.a.createElement("div",null,m.a.createElement("div",{className:l.Meal__Details__img},m.a.createElement("img",{src:r,alt:"Meal"})),m.a.createElement("div",null,m.a.createElement("p",null,this.props.meal.name),m.a.createElement("p",null,"$",this.props.meal.price))),t.map(function(t){return m.a.createElement(f.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,changed:function(a){return e.inputChangeHandler(a,t.id,"quantity")}})})),m.a.createElement("div",{className:l.Modal__footer},m.a.createElement("button",{type:"button","data-dismiss":"modal",onClick:this.props.closeModal},"Close"),m.a.createElement("button",{type:"submit"},"Add"))):null,checkout:o,meal:m.a.createElement("form",{action:"#",method:"post",id:"mealForm",onSubmit:this.handleMealForm},m.a.createElement("div",{className:l.Modal__body},n.map(function(t){return m.a.createElement(f.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,changed:function(a){return e.inputChangeHandler(a,t.id,"meal")}})})),m.a.createElement("div",{className:l.Modal__footer},m.a.createElement("button",{type:"button","data-dismiss":"modal",onClick:this.props.closeModal},"Close"),m.a.createElement("button",{type:"submit"},this.props.edittingMeal?"Edit":"Add")))}[this.props.type]}}]),t}(c.Component),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={modal:[u.a.Modal,u.a.Hidden]},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.show!==this.props.show}},{key:"render",value:function(){var e=null,t=Object(n.a)(this.state.modal);return this.props.show&&(t.pop(),e=m.a.createElement("div",{className:t.join(" "),role:"dialog"},m.a.createElement("div",{className:u.a.Modal__content},m.a.createElement("div",{className:u.a.Modal__header},m.a.createElement(_,{title:{quantity:"Order",checkout:"Checkout",meal:"Meal Option"}[this.props.type],classes:u.a}),m.a.createElement("button",{type:"button",className:["Btn",u.a.Close].join(" "),"data-dismiss":"modal",onClick:this.props.close},"\xd7")),m.a.createElement(M,{classes:u.a,type:this.props.type,closeModal:this.props.close,meal:!!this.props.meal&&this.props.meal,edittingMeal:!!this.props.edittingMeal&&this.props.edittingMeal,editMeal:this.props.editMeal,addMeal:this.props.addMeal,addMealToOrders:this.props.orderMeal})))),e}}]),t}(c.Component);t.a=g},131:function(e,t,a){"use strict";a.r(t);var n=a(18),l=a(19),o=a(21),r=a(20),i=a(22),s=a(0),c=a.n(s),m=a(14),d=a(16),u=a(33),_=a(42),p=a(41),h=a(113),f=a(28),M=a(118),g=a(104),v=a(5),b=a(102),y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),s=0;s<l;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).state={mealToBeUpdated:null,editingMeal:!1,redirect:!1,redirectPath:null},a.handleAddToMeal=function(e){a.props.onAddMeal(e),"success"===a.props.resCode&&(a.props.onResetResCode(),a.props.onToggleModal(),a.setState({redirect:!0,redirectPath:"/admin/meals"}))},a.handleEditMeal=function(e,t){a.props.onUpdateMeal(e,t),"success"===a.props.resCode&&(a.props.onResetResCode(),a.props.onToggleModal(),a.setState({redirect:!0,redirectPath:"/admin/"}))},a.deleteMealOption=function(e){a.props.onDeleteMeal(e),window.location.reload()},a.showEditMealModal=function(e){a.setState({mealToBeUpdated:e}),a.props.onToggleModal()},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchMeals()}},{key:"render",value:function(){var e=c.a.createElement(h.a,{type:"mealOptions",meals:this.props.meals,toggleMealModal:this.props.onToggleModal,removeMeal:this.deleteMealOption,showEditMealModal:this.showEditMealModal});return this.props.loading&&(e=c.a.createElement(f.a,null)),this.props.loading||0!==this.props.meals.length||(e=c.a.createElement(g.a,{text:"Meal Options"})),c.a.createElement(c.a.Fragment,null,this.state.redirect?c.a.createElement(d.a,{to:this.state.redirectPath}):null,c.a.createElement(_.a,{bannerText:"Your Meal Options",authenticated:this.props.catererAuthenticated,overlay:this.props.showModal,caterer:!0}),c.a.createElement("main",null,e),c.a.createElement(M.a,{type:"meal",show:this.props.showModal,editMeal:this.handleEditMeal,edittingMeal:this.state.mealToBeUpdated,addMeal:this.handleAddToMeal,close:this.props.onToggleModal}),c.a.createElement(p.a,null))}}]),t}(s.Component);t.default=Object(m.b)(function(e){return{loading:e.meal.loading,catererAuthenticated:e.auth.catererAuthenticated,meals:e.meal.meals,showModal:e.meal.showMealModal,resCode:e.global.lastReq}},function(e){return{onFetchMeals:function(){return e(u.j())},onToggleModal:function(){return e(u.x())},onAddMeal:function(t){return e(u.h(t))},onResetResCode:function(){return e(u.u())},onDeleteMeal:function(t){return e(u.i(t))},onUpdateMeal:function(t,a){return e(u.k(t,a))}}})(Object(b.a)(y,v.a))}}]);
//# sourceMappingURL=4.7964510d.chunk.js.map