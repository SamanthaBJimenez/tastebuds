import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantFeed = ({restaurants}) => {
    
    const restaurantList = restaurants.map((restaurant, i) => {
        return <Link key={i} to={`/restaurant/${restaurant.restaurant_id}`}><li>
                <button name={restaurant.restaurant_id} className = 'restaurants' value={restaurant.restaurant_name} >
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