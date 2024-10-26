import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Orders from './pages/Orders'
import About from './pages/About'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Footer from './components/Footer'
import SearchBar from './components/SeachBar'
function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
