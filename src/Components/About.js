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

                <UserClass name={"First"} location={"Kota, Rajasthan"}/>
                <UserClass name={"Second"} location={"New Delhi, Delhi"}/>
            </div>
        )
    }
}

/** 
 *  This is the wrong order of lifecycle methods when mutliple childrens are called
 * - Parent Constructor
 * - Parent Render
 *      - First Child Constructor
 *      - First Child Render
 * 
 *      - Second Child Constructor
 *      - Second Child Render
 *      
 *      <DOM Updated - In Single Batch>
 *      - First Child ComponentDidMount
 *      - Second Child ComponentDidMount
 *      
 * - Parent ComponentDidMount
 */

export default About;