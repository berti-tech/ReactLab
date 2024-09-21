import { CDN_URL } from "../utils/constants";

const ItemList = ({items, dummy}) => {
    
    return (
        <div>
            {items.map((item) => {
                return (
                    <div key={item.card.info.id} className="flex justify-between p-2 m-2 border-gray-200 border-b-2 text-left">
                        <div className="w-3/4">
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span>
                                    - ₹ 
                                    {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                                </span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="relative">
                            <img
                            src={CDN_URL + item.card.info.imageId}
                            alt={item.card.info.name}
                            className="w-full h-32 object-cover rounded-lg mb-2"
                            />
                        
                            <button className="absolute bottom-0 left-0 right-0 bg-green-600 text-white px-2 py-1 rounded-b-lg opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
                                Add + 
                            </button>
                        </div>
                    
                    </div>
                    
                )
                
            })}
        
        </div>
    );
};

export default ItemList;