import {useState, useEffect} from "react";
import { MENU_API_URL } from "../utils/constants";


const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    // Fetch the data
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();

        console.log(json)
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;