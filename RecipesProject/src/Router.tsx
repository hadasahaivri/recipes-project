import { createBrowserRouter } from "react-router";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import AllRecipes from "./components/recipes/AllRecipes";
import AddRecipe from "./components/recipes/AddRecipe";


const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/AllRecipes', element: <AllRecipes /> },
            { path: '/AddRecipe', element: <AddRecipe /> },
            { path: "/recipes/:title", element: <AllRecipes /> }
        ],
    }
]);

export default router;
