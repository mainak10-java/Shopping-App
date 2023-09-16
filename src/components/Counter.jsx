import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/slices/CounterSlice";

function Counter(){
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

 // console.log(counter)

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return(
  <div className="flex gap-x-3 border px-2 rounded-lg border-black">
        <button onClick={handleDecrement} className="border-r px-2 border-r-black ">
            -
        </button>

        <div> 
            {counter}
        </div>

        <button onClick={handleIncrement} className="border-l px-2 border-l-black">
            +
        </button>
  </div>)
}

export default Counter