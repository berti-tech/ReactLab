import AppLogo from "../utils/AppLogo.png";
import {useState} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

// Create toggle Button for Login-Logout
// Whenever the state variable changes, React will render the header component
const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();
    
    console.log("Header Rendered")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={AppLogo} draggable="false"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li id="online-status">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
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
                    <button className="login" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;