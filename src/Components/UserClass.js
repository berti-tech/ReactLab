import React from "react";

// Class based component


/**
 * Goal : 
 *   1. How to create state variables in class based components
 *   2. Creating multiple state variables in class based components
 */

// State is created in class components whenever we create a instance of the class

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 2,
        };

        console.log(props);
    }
    render() {

        return (
            <div className="user-card">
                <h3>Count: {this.state.count}</h3>
                <h3>Count2: {this.state.count2}</h3>
                <h3>Name: {this.props.name}</h3>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact: @bharat18</h4>
            </div>
        )
    }
}

export default UserClass;