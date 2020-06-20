import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import NavBar from './NavBar'

const RestaurantPage = () => {
    const params = useParams("/restaurant/:id");
    const { name } = params
    const [restaurantName, setRestaurantName] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [hours, setHours] = useState("");
    const [address, setAddress] = useState("");
    const [priceRange, setPriceRange] = useState("");

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                let res = await axios({
                    method:"GET",
                    url:`https://us-restaurant-menus.p.rapidapi.com/restaurant/${name}`,
                    headers:{
                        'X-RapidAPI-Key': '5795adbc70mshf03f458b9c437e0p19c7e3jsn2a5c4a014b1d',
                        'X-RapidAPI-Host': 'us-restaurant-menus.p.rapidapi.com' 
                    },
                    })
                    setRestaurantName(res.data.result.restaurant_name);
                    setCuisine(res.data.result.cuisines);
                    setHours(res.data.result.hours);
                    setAddress(res.data.result.address.formatted);
                    setPriceRange(res.data.result.price_range);
            } catch (error){
                console.log(error)
            }
        }
        fetchRestaurant();
    }, [name])

    return (
        <div> 
            Restaurant Page
            <div>
                <h3>
                    {restaurantName}
                </h3>
                Cuisine: {cuisine}
                Price: {priceRange}
                Address: {address}
                Hours: {hours}
            </div>
        </div>
    )
}

export default RestaurantPage