import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
    
    const {resData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating, sla} = resData?.info;
    return (
        <div className="res-card w-[200px] h-[400px] p-2 m-2 bg-gray-100 rounded-md shadow-md overflow-hidden">
            <img className="res-logo"
                alt="res-logo" 
                src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐️</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}



