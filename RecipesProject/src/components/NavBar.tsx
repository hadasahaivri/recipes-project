import { Link } from "react-router"
const NavBar = () => {
    return (
        <nav style={{ textAlign: 'right', marginTop: '30px',position:"fixed",top:"0",right:"0" }}>
            <Link to='/' style={{ color: 'black', padding: '10px' }}>home</Link>|
            <Link to='/AllRecipes' style={{ color: 'black', padding: '10px' }}>Allrecipes</Link>|
            <Link to='/AddRecipe' style={{ color: 'black', padding: '10px' }}>AddRecipe</Link>      
        </nav>
    )
}
export default NavBar