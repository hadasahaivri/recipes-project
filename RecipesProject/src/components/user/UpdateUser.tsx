import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { UserContext } from "./userReducer"
import axios from "axios";
import { Modal, Box, Button, TextField, Typography } from '@mui/material';



const UpdateUser = () => {
    const [open, setOpen] = useState(false)
    const { state: user, dispatch: userDispatch } = useContext(UserContext)

    console.log("User object:", user);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        userDispatch({ type: 'UPDATE', data: { [id]: value } })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("User before update:", user);
        try {
            const res = await axios.put(`http://localhost:3000/api/user`,
                user, {
                headers: {
                    'Content-Type': 'application/json',
                    'user-id': `${user.id}`,
                    'access-control-allow-origin': '*',
                }
            });
            
            userDispatch({ type: 'UPDATE', data: res.data })
        } catch (error) {
            console.error(error)
        } finally {
            setOpen(false)
        }
    }

    return (<>
        <Button variant="contained" onClick={() => setOpen(!open)} style={{fontSize:"12px", height: "fit-content" ,background:"rgb(255 255 255)",color:"black",fontFamily:"auto"}}>
            Update Data
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box className="modal-box">
                <Typography variant="h6">Update Your Information</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField label="First Name" value={user.firstName}  onChange={handleChange}id="firstName" fullWidth margin="normal"  />
                    <TextField label="Last Name" value={user.lastName} onChange={handleChange}  id="lastName" fullWidth margin="normal"/>
                    <TextField label="Email" value={user.email}onChange={handleChange}id="email" fullWidth margin="normal"/>
                  <TextField label="Adress" value={user.adress}  onChange={handleChange} id="adress"fullWidth margin="normal"/>
                    <TextField label="Phone" value={user.phone}onChange={handleChange}  id="phone" fullWidth margin="normal" />

                    <Button type="submit"  variant="contained" color="primary" fullWidth className="modal-button" >
                        Update
                    </Button>
                </form>
            </Box>
        </Modal>
        
    </>)
}
export default UpdateUser;

