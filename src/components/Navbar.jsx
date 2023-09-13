import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () =>{
   return(
    <div>
        <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
            <NavLink to='/'>
                <div>
                    <img src="../logo.png" className="h-14"/>
                </div>
            </NavLink>
            
            <div className="flex gap-x-2">
                <NavLink to='/'>
                    <button>
                        Home
                    </button>
                </NavLink>
               
                <NavLink to='/cart'>
                    <FaShoppingCart/>
                </NavLink>
            </div>
        </div>
    </div>
    
   );
}

export default Navbar;