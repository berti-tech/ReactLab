import {RestaurantCard} from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { withDiscountLabel } from "./RestaurantCard";

/**
 *  Fetch dynamic data from the API and populate the page dynamically.
 *  Make API call in React
 *  useEffect()
 */


const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState(""); 

    // It will return us a new card which has a lable inside it
    const RestaurantCardDiscounted = withDiscountLabel(RestaurantCard);



    // UseEffect() is called after every render of the component
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(()=>{
        // Filtered Logic
        const filtered = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filtered);
    }, [searchText, listOfRestaurants]); // Run whenever searchText or listOfRestaurants changes

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.910099&lng=77.637875&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

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
            <div className="offline-msg m-2 flex items-center justify-center fixed top-100 left-0 right-0 bottom-0  bg-red-100">
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
            <div className="filter mb-10 flex items-center justify-center gap-4 p-4 bg-gray-100 shadow-md rounded-lg">    
                <div className="search w-80 flex rounded-md border border-gray-400 shadow-lg overflow-hidden">
                    <input type="text" className="search-box px-3 py-2 focus:outline-none w-full" placeholder="Search restaurants..." 
                        value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className="bg-blue-500 hover:bg-blue-600 transition duration-200 text-white font-bold w-20 py-2 px-4" onClick={()=>{
                        // Filter the restaurant cards & update the UI
                        // Search Text
                        console.log(searchText)

                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant)

                    }}>🔍</button>
                </div>
                <button className="filter-btn shadow-md bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md" onClick={()=>{
                    // Filter Logic
                    const filteredList = listOfRestaurants.filter(
                        res => res.info.avgRating > 3.5
                    );

                    // Updating the listOfRestaurant with the filtered list
                    setListOfRestaurant(filteredList);
                }}  
                >
                    Top Rated Restaurants ★
                </button>
            
            </div>
            <div className="restaurant-container flex flex-wrap justify-center gap-6">
            {
                filteredRestaurant.map(restaurant => 
                    <Link 
                        key={restaurant.info.id} 
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        {/** If the restaurant has discount, then add a discount label to it */
                            restaurant.info.aggregatedDiscountInfoV3 ? (
                                <RestaurantCardDiscounted resData={restaurant}/>
                            ) : (
                                <RestaurantCard resData={restaurant}/>
                        )}
                    </Link>
                )
            }    
            </div>
        </div>
    )
}

export default Body;