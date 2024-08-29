import {RestaurantCard} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react"

/**
 * React Hooks - Normal Javascript utility functions (Utility function)
 *     1. useState() - Used to build superpowerful state variables in React
 *     2. useEffect()
 */

// State variable - Super powerful variable 
//     => State variable maintains the state of the component
//     => How can we create the super powerful variable - For that we use React Hooks - useState()
    

// Task : Filter Button should filter out the top-rated restaurant which has the rating greater than 4.
// Filter out all the top rated restaurants
const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState(resList);

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