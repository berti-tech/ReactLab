import {useState} from "react";


const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    // console.log(count);
    return (
        <div className="user-card">
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <h3>Name: {props.name}</h3>
            <h3>Location: {props.location}</h3>
            <h4>Contact: @bharat18</h4>
        </div>
    );
}

export default User;