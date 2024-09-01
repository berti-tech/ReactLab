import {RestaurantCard} from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { useState, useEffect } from "react"

/**
 *  Fetch dynamic data from the API and populate the page dynamically.
 *  Make API call in React
 *  useEffect()
 */


const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState([]);

    // 1. As soon as the page loads, the Body component will be rendered
    // 2. Then we will make an API call after the render is done.

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        // Convert the data to JSON
        const json = await data.json();

        console.log(json);
        // Optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };


    // Conditional Rendering - Rendering on the basis of condition is known as conditional rendering
    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="search">
                <button className="filter-btn" onClick={()=>{
                    // Filter Logic
                    const filteredList = listOfRestaurants.filter(
                        res => res.info.avgRating > 4
                    );

                    // Updating the listOfRestaurant with the filtered list
                    setListOfRestaurant(filteredList);
                }}  
                >
                    Top Rated Restaurants
                </button>
            
            </div>
            <div className="restaurant-container">
            {
                listOfRestaurants.map(restaurant => 
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                )
            }    
            </div>
        </div>
    )
}

export default Body;