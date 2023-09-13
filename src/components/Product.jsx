import { useDispatch, useSelector } from "react-redux";
import { add , remove } from "../redux/slices/CartSlice";

const Product = ({prod}) =>{
    const {cart}  = useSelector((state) => state)
    const dispatch = useDispatch();

    function removeFromCart(){
        dispatch(remove(prod.id))
    }

    function addToCart(){
        dispatch(add(prod))
    }

    return(
        <div>
            <div>
                <p>{prod.title}</p>
            </div>

            <div>
                <p>{prod.description}</p>
            </div>

            <div>
                <img src={prod.image} />
            </div>

            <div>
                <p>${prod.price}</p>

                {
                    cart.some((p) => p.id === prod.id) ?
                    (<button onClick={removeFromCart}>
                        Remove from cart
                    </button>) : 
                    (<button onClick={addToCart}>
                        Add to card
                    </button>)
                }
            </div>

            
        </div>
    );
}

export default Product