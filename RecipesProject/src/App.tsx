//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import User from "./components/user/User";
//import AllRecipes from "./components/recipes/AllRecipes";
//
//const App = () => {
//  return (
//    <Router>
//
//      <User />
//      <h1 style={{marginTop:"100px"}}>חוברת המתכונים שלי</h1>
//      <Routes>
//        <Route path="/" element={<AllRecipes />} />{/* דף התחברות */}
//        <Route path="/recipes" element={<AllRecipes />} /> {/* דף רשימת המתכונים */}
//        <Route path="/recipes/:id" element={<AllRecipes />} /> {/* דף פרטי המתכון */}
//      </Routes>
//    </Router>
//  );
//};
//
//export default App;


import { RouterProvider } from "react-router"
import router from "./Router"
import './index.css'

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App




