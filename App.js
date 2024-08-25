import React from "react";
import ReactDOM from "react-dom/client";

// React Component
const Title = () => (
    <h1 className="head">
        Namaste React using JSX
    </h1>
)

// Component Composition
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">Heading Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a component
root.render(<HeadingComponent/>)