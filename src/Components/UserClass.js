import React from "react";

// Class based component


/**
 * Goal : Update the state variables in class components 
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
                <button onClick={()=>{
                    // Never update the state variables directly
                    // Eg-  this.state.count = this.state.count + 1
                    this.setState({count: this.state.count + 1})
                }}>Count Increase</button>
                <h3>Name: {this.props.name}</h3>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact: @bharat18</h4>
            </div>
        )
    }
}

export default UserClass;