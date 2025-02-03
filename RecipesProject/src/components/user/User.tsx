import { useReducer } from "react"
import userReducer, { initialState, UserContext } from "./userReducer"
import Login from "./Login"
import UserData from "./UserData"
import '../../index.css';
import { Outlet } from "react-router-dom";


const User = () => {
    const [user, dispatchUser] = useReducer(userReducer, initialState);

    return (
        <div className="loginSignup">
            <UserContext.Provider value={{ state: user, dispatch: dispatchUser }}>
                {!user.email ? <Login /> : <UserData />}
                <Outlet />
            </UserContext.Provider>
        </div>
    );
};

export default User;
