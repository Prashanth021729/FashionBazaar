import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () =>{
    
    const {products, showSearch,search} = useContext(ShopContext)
    const [showfilter , setshowfilter] =  useState(true)
    const [filterproducts ,setfilterproducts] = useState([])
    const [category , setcategory] = useState([])
    const [subCategory, setsubCategory] = useState([])
    const [sortType, setSortType] = useState('relevant')

    const toggleCategory = (e) => {
        if(category.includes(e.target.value)){
            setcategory(prev => prev.filter(item => item !== e.target.value))
        }
        else{
            setcategory(prev => [...prev,e.target.value])
        }
    }
    
    const toggleSubCategory = (e) =>{
        if(subCategory.includes(e.target.value)){
            setsubCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else{
            setsubCategory(prev => [...prev,e.target.value])
        }
    }

    const prdouctfilter = () =>{
        let ProductCopy = products.slice();

        if(showSearch && search){
            ProductCopy = ProductCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
         
        if(category.length > 0){
            ProductCopy = ProductCopy.filter(item => category.includes(item.category));
        }
        if(subCategory.length > 0){
            ProductCopy = ProductCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setfilterproducts(ProductCopy)
    }

    const sortProduct = () =>{
        let filteredPrdouctCopy = filterproducts.slice();
        switch(sortType){
            case 'low-high':
                setfilterproducts(filteredPrdouctCopy.sort((a,b)=>(a.price - b.price)));
                break;
            case 'high-low':
                setfilterproducts(filteredPrdouctCopy.sort((a,b)=>(b.price - a.price)));
                break;
            default:
                prdouctfilter();
                break;
        }
    }

    useEffect(()=>{
        sortProduct();
    },[sortType])

    useEffect(()=>{
       prdouctfilter();   
    },[category,subCategory,search,showSearch])

    
    

    return(
        <div className="flex felx-row mt-4 sm:flex-row gap-1 sm:gap-10 border-t ">
            <div className="min-w-60">
                <p onClick={()=>setshowfilter(!showfilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2 ">FILTERS</p>
                  <img className={`h-3 sm:hidden ${showfilter?'rotate-90':''}`} src={assets.dropdown_icon} alt=""/>
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter?'':'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray">
                        <p className="flex  gap-2">
                            <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids
                        </p>
                    </div>
                </div>

                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter?'':'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">TYPES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray">
                        <p className="flex  gap-2">
                            <input className="w-3" type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>Winter
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={'ALL'} text2={'COLLECTIONS'}/>
                    <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-400 text-sm px-2">
                        <option value="relevant">Sort by: Relavant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>
                {/* Map Products*/}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {
                        filterproducts.map((items, index)=>(
                           <ProductItem key={index} id={items._id} name={items.name} image={items.image} price={items.price}/>
                        ))
                    }

                </div>
            </div>
        </div>
    )
};

export default Collection;