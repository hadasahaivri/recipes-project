import { useContext, useRef, useState } from "react"
import { UserContext } from "./userReducer";
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import '../../index.css';

const Login = () => {
    const { dispatch: userDispatch } = useContext(UserContext)//משתמש ב יוזקונטקסט כי צריך להעביר מידע מכל מיני קומפוננטות
    const [isLogin, setIsLogin] = useState(false);//משתמש ב יוזסטיט כי צריך למידע פנימי בתוך הקומפוננטה
    const [isSignUp, setIsSignUp] = useState(false);
    const [open, setOpen] = useState(false);


    const emailRef = useRef<HTMLInputElement>(null);//משתמש ב יוזרף כי אני רוצה לשנות רק את הערכים הספציפיים בלי לרנדר את כל הקומפוננטה
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleLogin = async () => {
        const url = isLogin ? 'http://localhost:3000/api/user/login' : 'http://localhost:3000/api/user/register';

        try {
            console.log(url);
            //שליחת בקשה לשרת
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'access-control-allow-origin': '*',
                },
                body: JSON.stringify({
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value
                }),

            });

            if (response.status === 401) {
                alert('אחד הפרטים או יותר שגוי')
                setOpen(false)
            }
            else if (response.status === 400) {
                alert('you alredy exist')
                setOpen(false)
            }

            else if (!response.ok)
                throw new Error(`fetch error ${response.status}`)
            //אם זה תקין מתחלק ללוגאין וסיגנאפ
            else {
                if (isSignUp) {
                    const { userId } = await response.json();//מתרגם את המידע לג'יסון
                    userDispatch({
                        type: "SIGNUP", data: {
                            id: userId,
                            email: emailRef.current?.value || '',
                            password: passwordRef.current?.value || '',
                        }
                    });

                }
                else if (isLogin) {
                    const { user } = await response.json();
                    userDispatch({
                        type: "LOGIN", data: user
                    });
                }
            }
        } catch (error) {
            console.error(error)
        } finally {
            emailRef.current!.value = '';
            passwordRef.current!.value = '';
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isLogin && setIsLogin(false);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isSignUp && setIsSignUp(false);
        }
    };

    return (
        <>
            <button onClick={() => { setIsLogin(true); setOpen(true); }}>Login</button>
            <button onClick={() => { setIsSignUp(true); setOpen(true) }}>SignUp</button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box className="modal-box">
                    <Typography variant="h6"> {isSignUp ? 'sign up' : 'Login'}</Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        inputRef={emailRef}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        inputRef={passwordRef}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        fullWidth
                        sx={{ marginTop: 2 }}
                    >
                        {isSignUp ? 'Sign up' : 'Login'}
                    </Button>
                </Box>
            </Modal>
        </>
    );
};
export default Login