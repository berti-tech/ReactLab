import {useEffect} from "react";
import {useState} from "react";

/**
 * Goal-2 : Custom Hook that can give me the status if I am online or offline
 *          Status of user if he is online or offline.
 */

const useOnlineStatus = () => {
    
    const [onlineStatus, setOnlineStatus] = useState(true);

    // Check if online status
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        })

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        })

    },[])
    

    return onlineStatus
}

export default useOnlineStatus