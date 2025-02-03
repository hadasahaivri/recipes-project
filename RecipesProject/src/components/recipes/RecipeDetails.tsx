import { Recipe } from "./recipeTipes";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const RecipeDetails = ({ recipe }: { recipe: Recipe }) => {
    // בודקים אם הרכיב 'products' קיים ומבצע את ה-split רק אם הוא לא undefined
    const ingredients = recipe.products ? recipe.products.split(',') : [];
    console.log("recipe")
    console.log(recipe);
    console.log(recipe.image);
    const defaultImage = 'https://vtasty.co.il/wp-content/uploads/2023/07/%D7%A4%D7%A1%D7%98%D7%94-%D7%A9%D7%9E%D7%A0%D7%AA-%D7%A4%D7%98%D7%A8%D7%99%D7%95%D7%AA-%D7%98%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%AA-3.jpg';

    return (
        <>
            {recipe.title && (
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" p={2}>
                    {/* כותרת המתכון */}
                    <Typography gutterBottom variant="h4" component="div" align="center">
                       <h2 style={{margin:"0"}} >{recipe.title}</h2> 
                    </Typography>

                    {/* תמונה של המתכון */}
                    {recipe.image && (
                        <img
                            src={recipe.image || defaultImage}
                            alt={recipe.title}
                            style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginBottom: '20px' }}
                        />
                    )}

                    {/* רשימת רכיבי המתכון */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1, textAlign:'center' }}>
                        רכיבים
                    </Typography >
                    <ul >
                        {ingredients.map((ingredient, index) => (
                            <li key={index} style={{ textAlign: "center" }}>{ingredient}</li>
                        ))}
                    </ul>

                    {/* אופן ההכנה */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                        אופן ההכנה 
                    </Typography>
                    <Typography variant="body1">
                        {recipe.description}
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default RecipeDetails;





