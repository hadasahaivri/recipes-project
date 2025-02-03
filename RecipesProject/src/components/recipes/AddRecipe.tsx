//import { useContext,  useRef } from "react"
//import { UserContext } from "../user/userReducer";
//import { useNavigate } from "react-router";
//import { Alert, Card, TextField } from "@mui/material";
//
//
//const AddRecipe = () => {
//    const titleRef = useRef<HTMLInputElement>(null);
//    const descriptionRef = useRef<HTMLInputElement>(null);
//    const productsRef = useRef<HTMLInputElement>(null);
//    const { state: user } = useContext(UserContext);
//    const navigate = useNavigate();
//    console.log("User object:", user);
//
//
//    const handleSubmit = async (e: React.FormEvent) => {
//
//        console.log("Form is being submitted");
//        e.preventDefault();
//
//        const url = 'http://localhost:3000/api/recipes/add';
//        try {
//            const response = await fetch(url, {
//                method: 'POST',
//                headers: {
//                    'content-Type': 'application/json',
//                    'user-id': `${user.id}`,
//                    'access-control-allow-origin': '*',
//                },
//                body: JSON.stringify({
//                    title: titleRef.current?.value,
//                    description: descriptionRef.current?.value,
//                    products: productsRef.current?.value,
//                }),
//            });
//            if (response.status === 401) {
//                alert('משתמש לא מוכר')
//            }
//            else if (!response.ok) {
//                throw new Error(`fetch error${response.status}`)
//            }
//        }
//        catch (error) {
//            console.error(error);
//        }
//        navigate('/');
//    }
//    return (
//        <>
//            {user.email ?
//                <Card variant="outlined" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', width: 'fit-content' }}>
//                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//                        <TextField id="outlined-basic" label="title" variant="outlined" inputRef={titleRef} style={{ marginBottom: '16px' }} />
//                        <TextField id="outlined-basic" label="products" variant="outlined" inputRef={productsRef} style={{ marginBottom: '16px' }} />
//                        <TextField id="outlined-basic" label="description" variant="outlined" inputRef={descriptionRef} style={{ marginBottom: '16px' }} />
//                        <br />
//                        <button type="submit" >add recipe</button>
//                    </form>
//                </Card> :
//                <Alert severity="error">To add a recipe you have to log in.</Alert>
//            }
//
//        </>
//    )
//}
//export default AddRecipe




//ort { useContext, useRef, useState } from "react";
//ort { UserContext } from "../user/userReducer";
//ort { useNavigate } from "react-router";
//ort { Alert, Card, TextField, Button } from "@mui/material";
//
//st AddRecipe = () => {
//onst titleRef = useRef<HTMLInputElement>(null);
//onst descriptionRef = useRef<HTMLInputElement>(null);
//onst productsRef = useRef<HTMLInputElement>(null);
//onst { state: user } = useContext(UserContext);
//onst navigate = useNavigate();
//onst [error, setError] = useState<string | null>(null);
//
/// Submit handler for adding a new recipe
//onst handleSubmit = async (e: React.FormEvent) => {
// e.preventDefault();
// setError(null); // Reset any previous errors
//
// // If user is not logged in
// if (!user.id) {
//   setError("עליך להתחבר כדי להוסיף מתכון.");
//   return;
// }
//
// const url = 'http://localhost:3000/api/recipes/add'; // Corrected API endpoint
// try {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'user-id': `${user.id}`,
//       'Access-Control-Allow-Origin': '*',
//     },
//     body: JSON.stringify({
//       title: titleRef.current?.value,
//       description: descriptionRef.current?.value,
//       products: productsRef.current?.value,
//     }),
//   });
//
//   if (response.status === 401) {
//     alert('משתמש לא מוכר');
//   } else if (!response.ok) {
//     throw new Error(`Fetch error: ${response.status}`);
//   }
//
//   // Successfully added recipe, navigate to recipe page
//   navigate('/recipes');
// } catch (error) {
//   console.error(error);
//   setError("שגיאה בהוספת המתכון.");
// }
//;
//
//eturn (
// <>
//   {user.email ? (
//     <Card
//       variant="outlined"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         margin: "auto",
//         width: "fit-content",
//         padding: "16px",
//       }}
//     >
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
//         <TextField
//           id="outlined-basic"
//           label="שם המתכון"
//           variant="outlined"
//           inputRef={titleRef}
//           style={{ marginBottom: "16px" }}
//         />
//         <TextField
//           id="outlined-basic"
//           label="מרכיבים"
//           variant="outlined"
//           inputRef={productsRef}
//           style={{ marginBottom: "16px" }}
//         />
//         <TextField
//           id="outlined-basic"
//           label="תיאור המתכון"
//           variant="outlined"
//           inputRef={descriptionRef}
//           style={{ marginBottom: "16px" }}
//         />
//         {error && <Alert severity="error" style={{ marginTop: "16px" }}>{error}</Alert>}
//         <Button type="submit" variant="contained" color="primary" style={{ marginTop: "16px" }}>
//           הוסף מתכון
//         </Button>
//       </form>
//     </Card>
//   ) : (
//     <Alert severity="error" style={{ marginTop: "16px" }}>
//       To add a recipe, you have to log in.
//     </Alert>
//   )}
// </>
//;
//
//
//ort default AddRecipe;
//
//
//

import { useContext,  useRef } from "react"
import { UserContext } from "../user/userReducer";
import { useNavigate } from "react-router";
import { Alert, Box, Button, TextField } from "@mui/material";


const UpdateRecipe = () => {
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const productsRef = useRef<HTMLInputElement>(null);
    const imageUrlRef=useRef<HTMLInputElement>(null);
    const { state: user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const url = 'http://localhost:3000/api/recipes/add';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                    'user-id': `${user.id}`,
                    'access-control-allow-origin': '*',
                },
                body: JSON.stringify({
                    title: titleRef.current?.value,
                    description: descriptionRef.current?.value,
                    products: productsRef.current?.value,
                    image:imageUrlRef.current?.value,
                }),
            });
            if (response.status === 401) {
                alert('משתמש לא מוכר')
            }
            else if (!response.ok) {
                throw new Error(`fetch error${response.status}`)
            }
            const getRecipesResponse = await fetch('http://localhost:3000/api/recipes');
            const recipes = await getRecipesResponse.json();
            console.log('All recipes:', recipes);
        }  
        catch (error) {
            console.error(error);
        }
        navigate('/');
    }
    return (
        <>
          {user.email ? (
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                margin: 'auto', 
                width: '400px',  // הגדרת רוחב מוגדר לאזור של הטופס
                padding: 2, // הוספת padding כדי שיהיה רווח מסביב
              }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <TextField 
                  id="title" 
                  label="Title" 
                  variant="outlined" 
                  inputRef={titleRef} 
                  sx={{ marginBottom: '16px', width: '100%' }} // שדה אורך מלא
                />
                <TextField 
                  id="products" 
                  label="Products" 
                  variant="outlined" 
                  inputRef={productsRef} 
                  sx={{ marginBottom: '16px', width: '100%' }} 
                />
                <TextField 
                  id="description" 
                  label="Description" 
                  variant="outlined" 
                  inputRef={descriptionRef} 
                  sx={{ marginBottom: '16px', width: '100%' }} 
                />
                <TextField 
                  id="image-url" 
                  label="Image URL" 
                  variant="outlined" 
                  inputRef={imageUrlRef} 
                  sx={{ marginBottom: '16px', width: '100%' }} 
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  sx={{ marginTop: 2, width: '100%' }} // כפתור באורך מלא
                >
                  Add Recipe
                </Button>
              </form>
            </Box>
          ) : (
            <Alert severity="error">To add a recipe you have to log in.</Alert>
          )}
        </>
      );
}
export default UpdateRecipe