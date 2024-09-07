
const User = (props) => {
    return (
        <div className="user-card">
            <h3>Name: {props.name}</h3>
            <h3>Location: {props.location}</h3>
            <h4>Contact: @bharat18</h4>
        </div>
    );
}

export default User;