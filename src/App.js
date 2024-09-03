import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Functional Component is a normal function that returns some piece of JSX code
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

/**
 * Creating Routes in React
 */

// Create routing configurations in App.js to implement routes
// createBrowserRouter will create a routing configuration for us.
// We are creating routing configuration inside appRouter
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a component
root.render(<RouterProvider router={appRouter}/>)