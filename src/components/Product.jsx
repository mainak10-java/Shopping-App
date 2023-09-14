import { useDispatch, useSelector } from "react-redux";
import { add , remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const Product = ({prod}) =>{
    const {cart}  = useSelector((state) => state)
    const dispatch = useDispatch();

    function removeFromCart(){
        dispatch(remove(prod.id))
        toast.error('Removed from cart')
    }

    function addToCart(){
        dispatch(add(prod))
        toast.success('Added to cart')
    }

    return(
        <div className="hover:shadow-md flex flex-col justify-between items-center  border hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl ">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{prod.title}</p>
            </div>

            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left capitalize">{prod.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>

            <div className="h-[180px]">
                <img src={prod.image} className="w-full h-full"/>
            </div>

            <div className="flex justify-evenly gap-12 items-center w-full mt-5">
                <p className="text-green-600 font-semibold">${prod.price}</p>

                {
                    cart.some((p) => p.id === prod.id) ?
                    (<button onClick={removeFromCart} 
                    className="text-gray-700 border-2  border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase 
                    hover:bg-gray-700
                    hover:text-white transition duration-300 ease-in">
                        Remove from cart
                    </button>) : 
                    (<button onClick={addToCart}
                        className="text-gray-700 border-2  border-gray-700 rounded-full font-semibold 
                        text-[12px] p-1 px-3 uppercase 
                        hover:bg-gray-700
                        hover:text-white transition duration-300 ease-in">
                        Add to cart
                    </button>)
                }
            </div>

            
        </div>
    );
}

export default Product