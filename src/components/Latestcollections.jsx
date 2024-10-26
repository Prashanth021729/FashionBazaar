import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Card from "./Card";

const Latestcollections = () => {
    
    const {products} = useContext(ShopContext)
    const [latestproducts ,setlatestproducts] = useState([])
    
    useEffect(() => {
        setlatestproducts(products.slice(0,10))
    },[])

    return(
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Discover the freshest finds — shop our latest arrivals today!</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {latestproducts.map((items , index)=>(
              <Card key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
            )
            )}

            </div>
            
            
        </div>

    )
};

export default Latestcollections;