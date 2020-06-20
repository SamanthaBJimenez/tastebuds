import React, {useState} from 'react'
import RestaurantPage from './RestaurantPage'

const RestaurantFeed = ({restaurants}) => {
    // let [choice, setChoice] = useState("")
    
    const handleClick = (e) => {
        // setChoice(e.target.children)
        debugger
    }
    
    return(
        <>
            <>
                {restaurants.map(restaurant => {
                    return(
                        <ul>
                        <li>
                        <button className = 'restaurants' value={restaurant.restaurant_id} onClick = {handleClick}>
                             <h3>{restaurant.restaurant_name}</h3>
                             <p>{restaurant.cuisines}</p>
                             <p>{restaurant.price_range}</p>
                             <p>{restaurant.hours}</p>
                        </button>
                        </li>
                        </ul>
                    )
                })}
            </>
        </>
    )
}
{/* <RestaurantPage restaurant={restaurant}/> */}


export default RestaurantFeed