import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CreateReservation from './Reservations';
import ExistingRes from './existingRes';
import data from '../components/data/data.json'

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

                const newData = data.map( (data,i) => {
                    if(data.result.data[i].restaurant_id + "" === name){
                        
                    setRestaurantName(data.result.data[i].restaurant_name);
                    setCuisine(data.result.data[i].cuisines);
                    setHours(data.result.data[i].hours);
                    setAddress(data.result.data[i].address.formatted);
                    setPriceRange(data.result.data[i].price_range);
                    }
                   
                })
                  
            } catch (error){
                console.log(error)
            }
        }
        fetchRestaurant();
    }, [name])

    return (
        <div> 
            <div>
                <h3>
                    {restaurantName}
                </h3>
                <ul>
                <li>Cuisine: {cuisine}</li>
                <li>Price: {priceRange.length ? priceRange : "Price range not available"}</li>
                <li>Address: {address}</li>
                {/* <li>Hours: {hours.length ? hours : "Hours Not Available"}</li> */}
                </ul>
            </div>
            <div>
                <CreateReservation restaurantName={restaurantName}/>
                {/* <ExistingRes restaurantName={restaurantName}/> */}
            </div>
        </div>
    )
}

export default RestaurantPage