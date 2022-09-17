import { Link } from "react-router-dom"

const NavUser=({auth, setAuth})=>{
    return(
        <div>
            <ul  class="register-button">
                <Link to='/'><li>Home</li></Link>

                {
                    auth ? 
                    <>
                    <Link to='/Users'><li>Users</li></Link>
                    <li onClick={()=> setAuth(false)}>Logout</li>
                    </>

                    :

                    <li onClick={()=> setAuth(true)}>Login</li>
                }
                
                
            </ul>
        </div>
    )
}

export default NavUser