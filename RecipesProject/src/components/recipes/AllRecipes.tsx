//import { useEffect, useState } from "react";
//import { useNavigate, useParams } from "react-router-dom";
//import RecipeDetails from "./RecipeDetails";
//
//const recipes = [
//    { id: 1, title: "מתכון לפנקייק" },
//    { id: 2, title: "פסטה ברוטב שמנת ופטריות" },
//    { id: 3, title: "סלט אנטיפסטי" },
//];
//
//const AllRecipes = () => {
//    const [selectRecipe, setSelectRecipe] = useState<null | { id: number; title: string }>(null);
//    const { id } = useParams();
//    const navigate = useNavigate();
//
//    useEffect(() => {
//        if (id) {
//            const recipe = recipes.find(r => r.id === parseInt(id));
//            setSelectRecipe(recipe || null);
//        }
//    }, [id]);
//
//    const handleRecipeClick = (id: number) => {
//        navigate(`/recipes/${id}`);
//    };
//
//    return (
//        <div style={{ display: "flex", height: "100vh" }}>
//            <div
//                style={{
//                    width: "300px",
//                    height: "100%",
//                    overflowY: "auto",
//                    padding: "10px",
//                }}
//            >
//                <h2>רשימת המתכונים</h2>
//                {recipes.map((recipe) => (
//                    <div
//                        key={recipe.id}
//                        style={{
//                            cursor: "pointer",
//                            padding: "10px",
//                            borderBottom: "1px solid #ccc",
//                        }}
//                        onClick={() => handleRecipeClick(recipe.id)}
//                    >
//                        {recipe.title}
//                    </div>
//                ))}
//            </div>
//            <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
//                {selectRecipe ? (
//                    <div>
//                        <h2>{selectRecipe.title}</h2>
//                        <RecipeDetails id={selectRecipe.id} />
//                    </div>
//                ) : (
//                    <div>בחר מתכון מהרשימה הבאה</div>
//                )}
//            </div>
//
//        </div>
//    );
//};
//export default AllRecipes;
//
//import { useEffect, useState } from "react";
//import { useNavigate, useParams } from "react-router-dom";
//import RecipeDetails from "./RecipeDetails";
//
//const AllRecipes = () => {
//    const [recipes, setRecipes] = useState<{ id: number; title: string }[]>([]); // מצב למתכונים
//    const [selectRecipe, setSelectRecipe] = useState<null | { id: number; title: string }>(null);
//    const { id } = useParams();
//    const navigate = useNavigate();
//
// // שליפת המתכונים מה-API כשניווט לדף
//  useEffect(() => {
//      const fetchRecipes = async () => {
//          try {
//              const response = await fetch("http://localhost:3000/api/recipes");
//              if (!response.ok) {
//                  throw new Error("לא ניתן לשלוף את המתכונים");
//              }
//              const data = await response.json();
//              setRecipes(data); // עדכון מצב המתכונים
//          } catch (error) {
//              console.error(error);
//          }
//      };
//
//      fetchRecipes();
//  }, []); // ה-useEffect יתבצע פעם אחת כשיהיה צורך לטעון את המתכונים
//
//
//
//   useEffect(() => {
//       if (id) {
//           const recipe = recipes.find((r) => r.id === parseInt(id));
//           setSelectRecipe(recipe || null);
//       }
//   }, [id, recipes]); // נוסיף את recipes כ-dependency כדי שהשפעת ה-effect תקרה מחדש אחרי ששולפים את המתכונים
//
//   const handleRecipeClick = (id: number) => {
//       navigate(`/recipes/${id}`);
//   };
//
//    return (
//        <div style={{ display: "flex", height: "100vh" }}>
//            <div
//                style={{
//                    width: "300px",
//                    height: "100%",
//                    overflowY: "auto",
//                    padding: "10px",
//                }}
//            >
//                <h2>רשימת המתכונים</h2>
//                {recipes.map((recipe) => (
//                    <div
//                        key={recipe.id}
//                        style={{
//                            cursor: "pointer",
//                            padding: "10px",
//                            borderBottom: "1px solid #ccc",
//                        }}
//                        onClick={() => handleRecipeClick(recipe.id)}
//                    >
//                        {recipe.title}
//                    </div>
//                ))}
//            </div>
//            <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
//                {selectRecipe ? (
//                    <div>
//                        <h2>{selectRecipe.title}</h2>
//                        <RecipeDetails id={selectRecipe.id} />
//                    </div>
//                ) : (
//                    <div>בחר מתכון מהרשימה הבאה</div>
//                )}
//            </div>
//        </div>
//    );
//};
//
//export default AllRecipes;



//import { useEffect, useState } from "react";
//import { Box, List, ListItem, ListItemButton, CssBaseline, Drawer, ListItemText } from "@mui/material";
//import { useNavigate, useParams } from "react-router-dom";
//import RecipeDetails from "./RecipeDetails";
//
//
//const drawerWidth = 300;
//
//interface Recipe {
//  id: number;
//  title: string;
//  description: string;
//  details: string;
//}
//
//const AllRecipes = () => {
//  const [recipes, setRecipes] = useState<Recipe[]>([]);
//  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
//  const { id } = useParams();
//  const navigate = useNavigate();
//  
//  // שליפת המתכונים מה-API
//  useEffect(() => {
//    const fetchRecipes = async () => {
//      try {
//        const response = await fetch("http://localhost:3000/api/recipes");
//        if (!response.ok) {
//          throw new Error(`Error fetching recipes: ${response.status}`);
//        }
//        const data = await response.json();
//        setRecipes(data);
//      } catch (error) {
//        console.error("Error fetching recipes", error);
//      }
//    };
//    fetchRecipes();
//  }, []);
//  
//  // עדכון המתכון שנבחר
//  useEffect(() => {
//    if (id) {
//      const recipe = recipes.find((r) => r.id === parseInt(id));
//      setSelectedRecipe(recipe || null);
//    }
//  }, [id, recipes]);
//
//  // פעולת קליק על מתכון
//  const handleRecipeClick = (recipe: Recipe) => {
//    navigate(`/recipes/${recipe.id}`);
//    setSelectedRecipe(recipe); // עדכון המתכון הנבחר
//  };
//
//  return (
//    <Box sx={{ display: 'flex', height: '100vh' }}>
//      <CssBaseline />
//      
//      {/* צד שמאלי: Drawer עם רשימת המתכונים */}
//      <Drawer
//        sx={{
//          width: drawerWidth,
//          flexShrink: 0,
//          '& .MuiDrawer-paper': {
//            width: drawerWidth,
//            boxSizing: 'border-box',
//            top: '100px', // תוכל לשנות את ה-top אם ברצונך שה-Drawer לא יהיה צמוד מלמעלה
//          },
//        }}
//        variant="permanent"
//        anchor="left"
//      >
//        <List>
//          {recipes.map((recipe) => (
//            <ListItem key={recipe.id} disablePadding>
//              <ListItemButton onClick={() => handleRecipeClick(recipe)}>
//                <ListItemText primary={recipe.title} />
//              </ListItemButton>
//            </ListItem>
//          ))}
//        </List>
//      </Drawer>
//
//      {/* צד ימין: הצגת פרטי המתכון הנבחר */}
//      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
//        {selectedRecipe ? (
//   <RecipeDetails id={selectedRecipe.id} />
//        ) : (
//          <div>בחר מתכון מהרשימה לצפייה</div>
//        )}
//      </Box>
//    </Box>
//  );
//};
//
//export default AllRecipes;


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Recipe } from './recipeTipes';
import { useEffect, useState } from 'react';
import RecipeDetails from './RecipeDetails';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // הוספנו את useNavigate

const drawerWidth = 240;

const Recipes = () => {
  const [dataRecipies, setDataRecipies] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null); // שינוי כאן להיות null בהתחלה
  const navigate = useNavigate();  // הגדרת ה-hook של ה-navigate

  useEffect(() => {
    fetch('http://localhost:3000/api/recipes')
      .then(response => response.json())
      .then(dataRecipies => {
        setDataRecipies(dataRecipies);
      })
      .catch(error => {
        console.error('error fetching data', error);
      });
  }, []);

  const handleRecipeSelect = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    // עדכון הנתיב עם שם המתכון שנבחר
    navigate(`/recipes/${recipe.title}`);
  };

  return (
    <Box sx={{ display: 'flex', overflowY: "auto", maxHeight: "100vh" }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {/* אם נבחר מתכון, מציגים אותו */}
        {selectedRecipe ? (
          <RecipeDetails recipe={selectedRecipe} />
        ) : (
          <Typography variant="h6" color="textSecondary">
            <p style={{ textAlign: "center" }}>Select the recipe from the list below.</p>
          </Typography>
        )}
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: '100px',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List style={{ overflowY: "auto", maxHeight: "100vh" }}>
          {dataRecipies.map((recipe: Recipe) => (
            <ListItem key={recipe.id} disablePadding>
              <ListItemButton onClick={() => handleRecipeSelect(recipe)}>
                <ListItemText primary={recipe.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Recipes;





