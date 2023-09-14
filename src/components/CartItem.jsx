import {AiOutlineDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";


const CartItem = ({item}) =>{

    const dispatch = useDispatch();

    function removeFromCart(){
        dispatch(remove(item.id));
        toast.error('Removed from cart')
    }
    return (
        <div>
            <div className="flex gap-x-6 mt-5 border p-6 items-center rounded-lg shadow-md">

                <div className="w-full">
                    <img src={item.image}/>
                </div>
                <div className="flex flex-col gap-y-5">
                    <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
                    <h1 className="w-full text-gray-400 font-normal capitalize">{item.description}</h1>
                    <div className="flex w-full justify-between">
                        <p className="text-green-500">${item.price.toFixed(2)}</p>
                        <div onClick={removeFromCart} className="cursor-pointer text-red-600">
                            <AiOutlineDelete fontSize={25} color="red-200"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CartItem;