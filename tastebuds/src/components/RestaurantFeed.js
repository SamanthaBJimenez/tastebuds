import React from 'react'
import { Link } from 'react-router-dom'
import '../css/RestaurantFeed.css';

const RestaurantFeed = ({restaurants}) => {
    
    const restaurantList = restaurants.map((restaurant, i) => {
        return <Link key={i} to={`/restaurant/${restaurant.restaurant_id}`}><li className = 'restaurant_li'>
                <button name={restaurant.restaurant_id} className = 'restaurant_button' value={restaurant.restaurant_name} >
                    <h3 className = 'feed_name'>{restaurant.restaurant_name}</h3>
                    <p className = 'feed_cuisine'>{restaurant.cuisines}</p>
                    <p className = 'feed_price'>{restaurant.price_range}</p>
                    <p className = 'feed_hours'>{restaurant.hours}</p>
                </button>
        </li>
        </Link>
    })

    return(
        <ul className = 'restaurant_ul'>
            {restaurantList}
            {restaurantList.length ? restaurantList : <div className = 'feedBlurbDiv'><h1 className='feed_blurbOne'>Where Are We Going To Eat?</h1><h3 className = 'feed_blurbTwo'>Type your zip code in the search bar to find restaurants near you.</h3></div>}
        </ul>

    )
}

export default RestaurantFeed