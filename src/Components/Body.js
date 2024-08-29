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

    const [listOfRestaurants, setListOfRestaurant] = useState([
        {
            "info": {
              "id": "17313",
              "name": "KFC",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/768a43ed-602d-4e08-b6ab-a2bf8f7d3e33_17313.JPG",
              "locality": "Madiwala",
              "areaName": "BTM Layout",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
              ],
              "avgRating": 4.3,
              "parentId": "547",
              "avgRatingString": "4.3",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              }
            }
        },
        {
            "info": {
              "id": "35186",
              "name": "Savoury Restaurant",
              "cloudinaryImageId": "917f828567b485833c8bc6a1ed3cb2ad",
              "locality": "1st Stage",
              "areaName": "Btm Layout",
              "costForTwo": "₹450 for two",
              "cuisines": [
                "Arabian",
                "Indian",
                "Chinese",
                "Tandoor",
                "Biryani",
                "Seafood",
                "Kerala"
              ],
              "avgRating": 3.5,
              "parentId": "179209",
              "avgRatingString": "4.2",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              }
            }
        },
        {
            "info": {
              "id": "167636",
              "name": "Easybites By Empire",
              "cloudinaryImageId": "d06b7fa84cb8f8193f60d4c2de172347",
              "locality": "6th Sector",
              "areaName": "HSR Layout",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Snacks",
                "Fast Food",
                "Beverages"
              ],
              "avgRating": 4.4,
              "parentId": "443171",
              "avgRatingString": "4.4",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              }
            }
        }
    ]);

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