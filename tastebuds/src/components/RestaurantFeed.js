import React, {useState} from 'react'
// import RestaurantPage from './RestaurantPage'

const RestaurantFeed = ({restaurants}) => {
    let [choice, setChoice] = useState("")
    
    const handleClick = (e) => {
        setChoice(e.target.value)
        console.log(choice)
    }
    
    return(
            <>
                {restaurants.map(restaurant => {
                    return(
                        <ul key={restaurant.restaurant_id}>
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

    )
}

export default RestaurantFeed