import React from "react";
import ReactDOM from "react-dom/client";
import AppLogo from "./assets/AppLogo.png";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * 
 * Body
 *  - Search
 *  - Restaurant Container
 *      - RestaurantCard
 *          - Img
 *          - Name
 *          - Cuisines
 *          - Star Rating
 *          - Delivery Time
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */


// Header component -> Logo & Nav Items
const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    console.log(props)
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo"
                alt="res-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nw2xeql0jokm2rqnkzfs"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>Rating : 4.4</h4>
            <h4>38 min.</h4>

        </div>
    )
}

// We will see how can we create dynamic Restaurant cards - Passing Dynamic data to the restaurant cards
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant-container">
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="McDonalds" cuisine="Burger, Fast Foods"/>
            </div>
        </div>
    )
}

// Functional Component is a normal function that returns some piece of JSX code
// Conatiner div
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a component
root.render(<AppLayout/>)