import User from "./User";
import UserClass from "./UserClass"
import React from "react";



class About extends React.Component {
    constructor(props) {
        super(props);
        
        // console.log("Parent Constructor")
    }
    componentDidMount() {
        // console.log("Parent Component Did Mount")
    }

    render() {
        console.log("Parent Render")
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">About Class Component</h1>
                <h2 className="text-xl text-gray-700 mb-6">This is React Web Series</h2>

                <UserClass name={"First"} location={"Kota, Rajasthan"}/>
                
            </div>
        )
    }
}

export default About;