import React from "react";

// Class based component

// render() method will return some piece of JSX which will be displayed to the UI
class UserClass extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);
    }
    render() {

        return (
            <div className="user-card">
                <h3>Name: {this.props.name}</h3>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact: @bharat18</h4>
            </div>
        )
    }
}

export default UserClass;