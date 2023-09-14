import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Cart = () =>{
    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc,curr) => acc + curr.price, 0));
    }, [cart])
    return(
        <div>
            <div>
                {
                    cart.length > 0 ?
                    (<div className="flex max-w-6xl items-center mx-auto justify-evenly">
                        <div className="max-w-[40rem]">
                            {
                                cart.map((item) => (
                                    <CartItem item={item} key={item.id}/>
                                ))
                            }
                        </div>

                        <div className="flex flex-col gap-y-5 max-w-[20rem] items-center">
                            <div className="flex flex-col gap-y-3">
                                <div className="text-2xl ">Your Cart</div>
                                <div className="text-3xl font-medium">Summary</div>
                                <p>
                                    <span className=" text-xl">Total Items: {cart.length}</span>
                                </p>
                            </div>  

                            <div className="flex gap-x-6 items-center w-full">
                                <p className="font-bold"> Total Amount: ${totalAmount}</p>
                                <button className="border px-2 py-1 bg-green-300 text-white rounded-lg hover:bg-green-500
                                transition-all duration-200">
                                    Checkout Now
                                </button>
                            </div>
                        </div>
                        
                        
                    </div>) : 
                    (
                        <div className="flex flex-col items-center justify-center h-[100vh] gap-y-10">
                            <h1 className="text-6xl font-bold">Cart Empty</h1>
                            <NavLink to='/'>
                                <button className="bg-green-300 text-xl px-10 py-4 rounded-lg text-white hover:bg-green-500
                                transition-all duration-200 border border-green-500">
                                    Shop Now
                                </button>
                            </NavLink>
                        </div>
                    )
                }
            </div>
        </div>
    );
} 

export default Cart;