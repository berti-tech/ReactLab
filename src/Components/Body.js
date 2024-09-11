import {RestaurantCard} from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

/**
 *  Fetch dynamic data from the API and populate the page dynamically.
 *  Make API call in React
 *  useEffect()
 */


const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState(""); 

    // UseEffect() is called after every render of the component
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
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus == false) {
        return (
            <div className="offline-msg">
                <h2>You're offline. Please check your internet connection.</h2>
            </div>
        )
    }


    // Conditional Rendering - Rendering on the basis of condition is known as conditional rendering
    // Whenever you change the local state variable, React re-renders the component
    // Whenever state variable changes, React triggers a Re-conciliation cycle (re-renders the component)
    return listOfRestaurants.length == 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter flex items-center justify-center gap-4 p-4">    
                <div className="search flex rounded-md border border-gray-400 overflow-hidden">
                    <input type="text" className="search-box px-3 py-2 focus:outline-none w-full" placeholder="Search restaurants..." value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" onClick={()=>{
                        // Filter the restaurant cards & update the UI
                        // Search Text
                        console.log(searchText)

                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant)

                    }}>🔍</button>
                </div>
                <button className="filter-btn bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md" onClick={()=>{
                    // Filter Logic
                    const filteredList = listOfRestaurants.filter(
                        res => res.info.avgRating > 4
                    );

                    // Updating the listOfRestaurant with the filtered list
                    setListOfRestaurant(filteredList);
                }}  
                >
                    Top Rated Restaurants ★
                </button>
            
            </div>
            <div className="restaurant-container flex flex-wrap gap-6 mx-auto">
            {
                filteredRestaurant.map(restaurant => 
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                )
            }    
            </div>
        </div>
    )
}

export default Body;