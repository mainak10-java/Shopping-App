import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () =>{
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [prods, setProducts] = useState([]);

    async function fetchProducts(){
        setLoading(true);

        try{
            const response = await fetch(API_URL);
            const products = await response.json();
            
            console.log(products)
            setProducts(products);
        }
        catch(e){
            alert('Could not fetch data');
            setProducts([]);
        }

        setLoading(false);
    }

    useEffect(() =>{
        fetchProducts(); 
    },[])
    return(
        <div>
           {
            loading

            ? 

            <Spinner/> : 
            prods.length > 0 ?
            (<div>
                {
                    prods.map((prod) => (
                        <Product prod = {prod} key={prod.id}/>
                    ))
                }
            </div>) : (<div>No Products found</div>)
           }
        </div>
    );
}

export default Home;