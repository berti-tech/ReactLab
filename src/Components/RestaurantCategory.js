import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({data}) => {
    
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        // This function will show & hide the item List, when I click on the button
        setShowItems(!showItems);
    }
    return (
        <div>
            {/** Header */}
            <div className="w-1/2 mx-auto my-4 bg-gray-100 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                {
                    showItems && (
                        <ItemList items={data.itemCards}/>
                    )
                }

            </div>
            
            
            
        </div>
        


    )
}


export default RestaurantCategory;