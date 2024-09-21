import {createContext} from "react"

// Global Object

const UserContext = createContext({
    loggedInUser: "Default User",
});

export default UserContext