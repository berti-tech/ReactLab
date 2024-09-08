import React from "react";

// Class based component


/**
 * Goal : Lifecyle methods when multiple Childs are called 
 */


class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 2,
        };

        console.log(props);
        console.log(this.props.name +  "Child Constructor")
    }

    componentDidMount() {
        console.log(this.props.name + "Child Component Did Mount")
    }

    render() {
        console.log(this.props.name + "Child Render")
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