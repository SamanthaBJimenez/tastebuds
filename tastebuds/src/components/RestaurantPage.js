import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateReservation from "./Reservations";
import data from "../components/data/data.json";
import "../css/RestaurantPage.css";

const RestaurantPage = () => {
  const params = useParams("/restaurant/:id");
  const { name } = params;
  const [restaurantName, setRestaurantName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [hours, setHours] = useState("");
  const [address, setAddress] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        let restaurants = data[0].result.data;

        restaurants.map((restaurant) => {
          if (restaurant.restaurant_id + "" === name) {
            setRestaurantName(restaurant.restaurant_name);
            setCuisine(restaurant.cuisines);
            setHours(restaurant.hours);
            setAddress(restaurant.address.formatted);
            setPriceRange(restaurant.price_range);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchRestaurant();
  }, [name]);

  return (
    <div>
      <div className="split_one left_one">
        <h3 className="rest_name">{restaurantName}</h3>
        <ul>
          <li className="rest_li">Cuisine: {cuisine}</li>
          <li className="rest_li">
            Price:{" "}
            {priceRange.length ? priceRange : "Price range not available"}
          </li>
          <li className="rest_li">Address: {address}</li>
          <li className="rest_li">
            Hours: {hours.length ? hours : "Hours Not Available"}
          </li>
        </ul>
      </div>
      <div className="split_one right_one">
        <CreateReservation restaurantName={restaurantName} />
      </div>
    </div>
  );
};

export default RestaurantPage;
