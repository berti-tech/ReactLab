import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => React Element - JS Object => HTML Element(render)
// React Element
const heading = (
    <h1 id="heading" className="head">
        Namaste React using JSX
    </h1>
)

// React Functional Component 
const Heading = () => (
    <h1 id="heading" className="head">
        Namaste React using JSX
    </h1>
)

// React component, 
// 1. Functional Component - NEW
// 2. Class-based component - OLD

// React Functional Component - Javascript function - A function that returns JSX code is a functional component
const HeadingComponent1 = () => {
    return <h1>Functional Component</h1>
}

const HeadingComponent2 = () => (
    <div id="container">
        <h2 className="heading">Heading Functional Component</h2>
    </div>
    
);

const HeadingComponent3 = () => <h3 className="heading3">Heading Functional Component</h3>


const root = ReactDOM.createRoot(document.getElementById("root"));

// Render 
root.render(heading);

// Rendering a component
root.render(<HeadingComponent2/>)