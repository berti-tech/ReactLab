import User from "./User";
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is React Web Series</h2>
            <User name={"Bharat Rajora"} location={"Kota, Rajasthan"}/>

            <UserClass name={"Bharat (Class)"} location={"Kota, Rajasthan"}/>
        </div>
    );
};

export default About;