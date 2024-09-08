import User from "./User";
import UserClass from "./UserClass"
import React from "react";



class About extends React.Component {
    constructor(props) {
        super(props);
        
        console.log("Parent Constructor")
    }
    componentDidMount() {
        console.log("Parent Component Did Mount")
    }
    
    render() {
        console.log("Parent Render")
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is React Web Series</h2>

                <UserClass name={"Bharat"} location={"Kota, Rajasthan"}/>
            </div>
        )
    }
}

export default About;