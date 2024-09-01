import AppLogo from "../utils/AppLogo.png";
import {useState} from "react"

// Create toggle Button for Login-Logout
// Whenever the state variable changes, React will render the header component
const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    console.log("Header Rendered")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={AppLogo} draggable="false"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;