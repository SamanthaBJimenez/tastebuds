import React from 'react'

const RestaurantFeed = ({restaurants}) => {
    
    const handleClick = () => {

    }

    return(
        <>
            <>
                {restaurants.map(restaurant => {
                    return(
                        <div className = 'restaurants' onClick = {handleClick}>
                             <h3>{restaurant.restaurant_name}</h3>
                             <p>{restaurant.cuisines}</p>
                             <p>{restaurant.price_range}</p>
                             <p>{restaurant.hours}</p>
                        </div>
                    )
                })}
            </>
        </>
    )
}
export default RestaurantFeed