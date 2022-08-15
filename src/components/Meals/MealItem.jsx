import classes from './MealItem.module.css'

export const MealItem = ({name, description, price:propPrice}) => {
    const price = `${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <p className={classes.description}>{description}</p>
                <div className={classes.price}>{price}</div>
            </div>
        </li>
    )
}