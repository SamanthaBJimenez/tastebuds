import React, {useState} from 'react'
import { Link } from 'react-router-dom'

// import RestaurantPage from './RestaurantPage'

const RestaurantFeed = ({restaurants}) => {
    let [choice, setChoice] = useState("")
    
    const handleClick = (e) => {
        setChoice(e.target.value)
        console.log(choice)
    }
    
    const restaurantList = restaurants.map((restaurant, i) => {
        return <Link key={i} to={`/restaurant/${restaurant.restaurant_name}`}><li>
                <button className = 'restaurants' value={restaurant.restaurant_name} onClick = {handleClick}>
                    <h3>{restaurant.restaurant_name}</h3>
                    <p>{restaurant.cuisines}</p>
                    <p>{restaurant.price_range}</p>
                    <p>{restaurant.hours}</p>
                </button>
        </li>
        </Link>
    })

    return(
        <ul>
            {restaurantList}
            {restaurantList.length ? restaurantList : <h1>Where We Bout To Eat At?</h1>}
        </ul>

    )
}

export default RestaurantFeed