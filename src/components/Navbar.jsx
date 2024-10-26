import { Link, NavLink } from 'react-router-dom';
import {assets} from '../assets/assets'
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {

    const [visible, setvisible] = useState(false);
    const {setShowSearch} = useContext(ShopContext);

    return(
        <div className="flex items-end justify-between py-5 font-medium ">
            <Link to={'/'}><img src={assets.logo} className='w-36 cursor-pointer' alt=""/></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-black'>
                <NavLink to={'/'} className='flex flex-col items-center gap-2 '>
                    <p>HOME</p>
                    <hr className='w-1/2 border-none h-[1.5px] bg-black hidden'/>
                </NavLink>
                <NavLink to={'/about'} className='flex flex-col items-center gap-2'>
                    <p>ABOUT</p>
                    <hr className='w-1/2 border-none h-[1.5px] bg-black hidden'/>
                </NavLink>
                <NavLink to={'/collection'} className='flex flex-col items-center gap-2'>
                    <p>COLLECTION</p>
                    <hr className='w-1/2 border-none h-[1.5px] bg-black hidden'/>
                </NavLink>
                <NavLink to={'/contact'} className='flex flex-col items-center gap-2'>
                    <p>CONTACT</p>
                    <hr className='w-1/2 border-none h-[1.5px] bg-black hidden'/>
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt=''/>
                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt=""/>
                    <div className='group-hover:block hidden absolute  right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-2 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                    
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5'/>
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>
                <img onClick={()=> setvisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt=''/>
            </div>
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-500 '>
                    <div onClick={() => setvisible(false)} className='flex items-center gap-4 p-4 cursor-pointer'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-140'/>
                          <p >Back</p>
                    </div>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-3 border' to={'/'}>HOME</NavLink>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-3 border' to={'/about'}>ABOUT</NavLink>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-3 border' to={'/collection'}>COLLECTION</NavLink>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-3 border' to={'/contact'}>CONTACT</NavLink>
                </div>

            </div>
        </div>
    )
}
export default Navbar;