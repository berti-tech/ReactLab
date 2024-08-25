import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Learning React 🚀"
);
console.log(heading)

// JSX - HTML/XML like syntax
const jsxHeading = (
    <h1 id="heading" className="head">
        Namaste React using JSX
    </h1>
)

console.log(jsxHeading)


// We need to create the root in react to render the react Element
// This root will become the root for our react App. 
// Whatever will happen inside react, will happen inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render 
root.render(heading);
root.render(jsxHeading);