import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../components/Forms/Form.module.css';
import FormWrapper from '../../components/Forms/FormWrapper/FormWrapper';
import FormHeadText from '../../components/Forms/FormHeadText/FormHeadText';

const catererRegister = (props) => {
  return (
    <FormWrapper>
      <form action="#" method="post" className={classes.Page_form} id="catererRegisterForm">
        <FormHeadText user="caterer" type="register" />
        <div className={classes.Form_group}>
          <input
            type="text"
            name="name"
            className={classes.Form_field}
            placeholder="Your Name"
            required
          />
        </div>
        <div className={classes.Form_group}>
          <input
            type="email"
            name="email"
            className={classes.Form_field}
            placeholder="Your Email"
            required
          />
        </div>
        <div className={classes.Form_group}>
          <input
            type="tel"
            name="phone"
            className={classes.Form_field}
            placeholder="Your Phone Number"
            required
          />
        </div>
        <div className={classes.Form_group}>
          <input
            type="text"
            name="catering_service"
            className={classes.Form_field}
            placeholder="Catering Service Name"
            required
          />
        </div>
        <div className={classes.Form_group}>
          <input
            type="password"
            name="password"
            className={classes.Form_field}
            placeholder="Your Password"
            required
          />
        </div>
        <div className={classes.Form_group}>
          <input
            type="password"
            name="confirm_password"
            className={classes.Form_field}
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit">Register</button>
        <p className={classes.Page_link}>
          Already Have an Account? <Link to="/admin/login">Login</Link>
        </p>
        <p className={classes.Page_link}>
          Back to Home? <Link to="/">Click Here</Link>
        </p>
      </form>
    </FormWrapper>
  );
}

export default catererRegister;