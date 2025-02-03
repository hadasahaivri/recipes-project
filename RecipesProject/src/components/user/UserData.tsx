import { useContext } from "react"
import { UserContext } from "./userReducer"
import UpdateUser from "./UpdateUser"
import { Avatar } from "@mui/material"


const UserData = () => {
    const { state: user } = useContext(UserContext)
    const avatar = user?.firstName
        ? <Avatar style={{background:"rgb(11 75 30)"}}>{user.firstName.charAt(0)}</Avatar>
        : <Avatar style={{background:"rgb(11 75 30)"}}>{user.email.charAt(0)}</Avatar>
    return (<>
        <div style={{ display: 'flex', alignItems:'center',width:'100%' }}>
            <h3 style={{display:'flex'}}>{avatar}<div style={{margin:"7px"}}>hello,  {user.firstName || user.email}</div> </h3>
            <UpdateUser />
        </div>
    </>)
}
export default UserData