import User from "./User";
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is React Web Series</h2>

            <UserClass name={"Bharat (Class)"} location={"Kota, Rajasthan"}/>
        </div>
    );
};

export default About;