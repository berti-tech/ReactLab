import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";


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

    if(resInfo==null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return (

        <div className="menu">
            <h1>{name}</h1>
            <p> 
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>{
                    return <li key={item.card.info.id}>{item.card.info.name} - {" Rs."}{item.card.info.price / 100}</li>
                })}
            </ul>

        </div>
    )
}

export default RestaurantMenu 