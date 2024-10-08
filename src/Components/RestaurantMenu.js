import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";


/**
 * Goal-1 : Create Custom Hook 
 *        Abstract the fetch data logic & put inside the custom hook
 * 
 * Create a custom hook that will fetch the data & will give to restaurantMenu hook.
 * RestaurantMenu hook has the single responsibility - i.e. Displaying the restaurant menu on the UI.
 * Separate the fetching data logic and displaying data logic on the UI
 * 
 * Hooks are nothing but utility functions or helper functions
 * 
 */

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    const dummy = "Dummy Data";

    if(resInfo==null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => {
            return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    return (

        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg"> 
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/** Category Accordian */}
            {categories.map((category, index) => {
                return (
                    // Controlled Component
                    <RestaurantCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card}
                        showItems={ index===showIndex ? true : false }
                        setShowIndex={ () => setShowIndex(index)}
                        dummy = {dummy}
                    />
                )
            })}

        </div>
    )
}

export default RestaurantMenu 