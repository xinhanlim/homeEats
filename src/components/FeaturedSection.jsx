import FeaturedCard from "./FeaturedCard";
import {useState, useEffect} from "react";
import axios from 'axios';

export default function FeaturedSection() {

    const[featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(()=>{
        const fetchFeatureProducts = async () => {
            try{
                const response = await axios.get('featured.json')
                setFeaturedProducts(response.data);
            }catch(e){
                console.log(e);
            }
        }
        fetchFeatureProducts();
    },[]);

    const renderFeatureProducts = () =>{
        return featuredProducts.map(product => (
            <div key={product.id}>
                <FeaturedCard
                image={product.image}
                name={product.name}
                price={product.price}
                ></FeaturedCard>
            </div>
        ))          
    }

    return (
        <div className="bg-[#FEFEFE] justify-center mx-auto pb-36 max-w-[1536px] gap-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {renderFeatureProducts()}
        </div>
    )
}