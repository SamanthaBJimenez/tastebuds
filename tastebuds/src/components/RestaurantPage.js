import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import NavBar from './NavBar'

const RestaurantPage = () => {
    const params = useParams("/restaurant/:id");
    const { name } = params

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                // console.log(id)
                let res = await axios({
                    method:"GET",
                    url:`https://us-restaurant-menus.p.rapidapi.com/restaurant/${name}`,
                    headers:{
                        'X-RapidAPI-Key': '5795adbc70mshf03f458b9c437e0p19c7e3jsn2a5c4a014b1d',
                        'X-RapidAPI-Host': 'us-restaurant-menus.p.rapidapi.com' 
                    },
                    })
                    debugger;
            } catch (error){
                console.log(error)
            }
        }
        fetchRestaurant();
    }, [name])

    return (
        <div> 
            Restaurant Page
        </div>
    )
}

export default RestaurantPage