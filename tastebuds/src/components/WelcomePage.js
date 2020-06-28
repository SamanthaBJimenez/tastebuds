import React, {useState} from 'react'
import axios from 'axios'
import RestaurantFeed from './RestaurantFeed';
import data from '../components/data/data.json'
import '../css/WelcomePage.css';

const Welcome = () =>{
     let [zipcode, setZipcode] = useState("");
     let [restaurants, setRestaurants] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
            let newdata = data;
            
            setRestaurants(newdata[0].result.data)

    }catch(err){
    console.log(err)
        }
    }
    return(
        <>
        <div className = 'welcome_img'>
            <div>
                <form className = 'welcome_form' onSubmit = {handleSubmit} >
                    <input className = 'zip_input' type = 'number' placeholder='Please enter a zip code' maxLength= "5" value={zipcode} onChange = {(e) => setZipcode(e.target.value)}/>
                    <button className = 'search_button'>Find A Buddy!</button>
                </form>
            </div>
        </div>
          <RestaurantFeed restaurants = {restaurants}/>
        </>
    )
}
export default Welcome;