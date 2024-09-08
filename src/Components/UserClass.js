import React from "react";

// Class based component


/**
 * Goal : ComponentDidMount() - Make API calls in class based components
 * 
 * Mounting - Showing on the UI
 * Unmounting - Removing from the UI
 */


class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo : {
                name : "Dummy Name",
                location : "Dummy Location",
                avatar_url: "https://dummy-photo.com"
            }
        }

        // console.log(props);
        // console.log(this.props.name +  "Child Constructor")
    }

    async componentDidMount() {
        // console.log(this.props.name + "Child Component Did Mount")
        const data = await fetch("https://api.github.com/users/berti-tech");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo : {
                name : json.name,
                location : json.location,
                avatar_url: json.avatar_url
            }
        })
    }

    componentDidUpdate() {
        console.log("Component Did Update")
    }

    componentWillUnmount() {
        console.log("Component Will Unmount")
    }

    render() {
        // console.log(this.props.name + "Child Render")
        // debugger;
        return (
            <div className="user-card">
                <img className="profile-pic"src={this.state.userInfo.avatar_url}/>
                <h3>Name: {this.state.userInfo.name}</h3>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: @bharat18</h4>
            </div>
        )
    }
}

export default UserClass;


/**
 * -----Mounting Cycle------
 * Constructor is called 
 * Render is called (dummy data)
 *      Dummy Data is rendered
 * componentDidMount - API Call
 *      API Call
 *      this.stateState -> State variable is updated
 * 
 * ------Update------
 *  render - render will happen with API Data
 *  React updates the DOM
 *  Component Did Update
 */