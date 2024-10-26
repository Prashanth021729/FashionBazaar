const Newsletter = () => {
    
    const onSubmitHandler = (event) =>{
      event.preventDefault();
    }
    
    return(
        <div className="text-center mt-6">
         <p className="text-2xl font-medium text-gray-800">Subscribe and get 20% off</p>
         <p className="text-gray-500 mt-3">
         Discover the latest trends in fashion! Shop now for stylish shirts and t-shirts at unbeatable prices, only at Forever.
         </p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input className=" w-full sm:flex-1 outline-none " type="email" placeholder="enter your email"/>
            <button type="submit" className="bg-slate-700 text-white rounded-sm px-10 py-4 hover:bg-black">Subscribe</button>
        </form>
        </div>
    )
}

export default Newsletter;