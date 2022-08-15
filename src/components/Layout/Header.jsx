import { Fragment } from "react"
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'

export const Header = () => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="food"/>
        </div>
    </Fragment>
}