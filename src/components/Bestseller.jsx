import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const Bestseller = () => {
    
    const {products} = useContext(ShopContext)
    const [bestseller, setbestseller] = useState([])
    
    useEffect(()=>{
      const bestproduct = products.filter((items)=>( items.bestseller))
      setbestseller(bestproduct.slice(0,20))
    },[])

    return(
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={'BEST'} text2={'SELLER'}/>
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Discover the best deals, handpicked just for you!</p>
            </div>
       
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                bestseller.map((items, index)=>(
                <Card key={index} id={items._id} name={items.name} price={items.price} image={items.image}/>
                ))
           } 
            </div>
        </div>
    )
}

export default Bestseller;