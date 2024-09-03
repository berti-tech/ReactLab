import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


// Functional Component is a normal function that returns some piece of JSX code
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

/**
 * Create Children Routes in React
 */

// Implement Children Routes
// If I go to About Us Page, I loose my header. 
// Ideally the header should always be on the top of the app and the About Us page should load below.
// Solution is to create children routes
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
        ],
        errorElement: <Error/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a component
root.render(<RouterProvider router={appRouter}/>)