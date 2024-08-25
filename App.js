import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>

// React Element
const title = (
    <h1 className="head">
        {elem}
        Namaste React using JSX
    </h1>
)

const number = 10000;

// Component Composition
const HeadingComponent = () => (
    <div id="container">
        <h2>{100+200}</h2>
        <br/>
        {number}
        <br/>
        {title}
        <h1 className="heading">Heading Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a component
root.render(<HeadingComponent/>)