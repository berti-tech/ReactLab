import {RestaurantCard} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react"

/**
 *  Fetch dynamic data from the API and populate the page dynamically.
 *  Make API call in React
 *  useEffect()
 */


const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState(resList);

    useEffect(() => {
        console.log("Use Effect Called");
    }, []);

    console.log("Body Rendered")

    return (
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