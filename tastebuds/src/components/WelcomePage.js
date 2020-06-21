import React, {useState} from 'react'
import axios from 'axios'
import RestaurantFeed from './RestaurantFeed';

const Welcome = () =>{
     let [zipcode, setZipcode] = useState("");
     let [restaurants, setRestaurants] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    try {
        let res = await axios({
            method: "GET",
            url:`https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/${zipcode}`,
            headers: {
                'X-RapidAPI-Key': '5795adbc70mshf03f458b9c437e0p19c7e3jsn2a5c4a014b1d',
                'X-RapidAPI-Host': 'us-restaurant-menus.p.rapidapi.com' 
                    },                   
            })
            
            setRestaurants(res.data.result.data)
    }catch(err){
    console.log(err)
        }
    }
    return(
        <>
        <h1>TasteBuds</h1>
        <div className = 'img'>
            <div className = 'form'>
                <form onSubmit = {handleSubmit} >
                    <input type = 'number' placeholder='Please enter a zip code' maxLength= "5" value={zipcode} onChange = {(e) => setZipcode(e.target.value)}/>
                    <button>Find A Buddy!</button>
                </form>
            </div>
        </div>
          <RestaurantFeed restaurants = {restaurants}/>
        </>
    )
}
export default Welcome;