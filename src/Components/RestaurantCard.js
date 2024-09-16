import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
    
    const {resData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating, sla} = resData?.info;
    return (
        <div className="res-card w-[250px] h-[400px] p-4 m-4 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg shadow-lg hover:scale-105">
            <img className="res-logo sm:h-48 w-full object-cover rounded-lg"
                alt="res-logo" 
                src={CDN_URL+cloudinaryImageId}
            />
            <div className="card-content p-4"> 
                <h3 className="font-bold text-lg text-center">{name}</h3> 
                <h4 className="truncate">{cuisines.join(", ")}</h4> 
                <h4>{avgRating} ⭐️</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </div>
    )
};


// Higher Order Component

// input - RestaurantCard => RestaurantCardDiscounted

// DiscountInfo Component
export const withDiscountLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Discounted Label</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
};
