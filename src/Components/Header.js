import AppLogo from "../utils/AppLogo.png";
import {useState} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

// Create toggle Button for Login-Logout
// Whenever the state variable changes, React will render the header component
const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();
    
    console.log("Header Rendered");
    return (
        <div className="header flex justify-between bg-yellow-400 border border-black rounded-md font-sans font-semibold mx-2 my-2 shadow-lg">
            <div className="logo-container flex flex-row flex-wrap content-center items-center">
                <img className="logo w-40 h-12 object-cover ml-12 rounded-md scale-150" src={AppLogo} draggable="false"/>
            </div>
            <div className="nav-items px-5 py-4">
                <ul className="flex items-center text-xl px-5 py-4 space-x-8">
                    <li id="online-status" className="text-sm">
                        Online Status: <span className="text-xs">{onlineStatus ? "🟢" : "🔴"}</span>
                    </li>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        Cart
                    </li>
                    <button className="login bg-black text-white font-bold py-2 px-4 rounded w-28" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;