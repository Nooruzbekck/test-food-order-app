import React from 'react'
import classes from './HeaderCartButton.module.css'
import { CartIcons } from './icons/CartIcons';

function HeaderCartButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
          <CartIcons />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton 