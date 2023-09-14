import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    const {cart} = useSelector((state) => state)
   return(
    <div>
        <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
            <NavLink to='/'>
                <div>
                    <img src="../logo.png" className="h-14"/>
                </div>
            </NavLink>
            
            <div className="flex gap-x-4 ">
                <NavLink to='/'>
                    <button className="text-white text-xl transition-all duration-200">
                        Home
                    </button>
                </NavLink>
               
                <NavLink to='/cart'>
                    <div>
                       
                        <FaShoppingCart fontSize={25} color="white" {...cart.length}/>
                    </div>
                    
                </NavLink>
            </div>
        </div>
    </div>
    
   );
}

export default Navbar;