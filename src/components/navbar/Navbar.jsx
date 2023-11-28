// import logo from '../../assets'; 
import './Navbar.css'
import CartWidget from '../cartwidget/Cart.jsx'
import React from 'react';

const Navbar = () => {
    return(
        <header className="bg-green-800 text-lg uppercase font-size: 1.5rem; ;">
            <div className="container m-auto py-6 flex justify-between items-center">
                <h1 className="">Photograph</h1>
                {/* <img src={logo} alt="Logo" className="w-16 h-16" /> */}
                <img src="https://www.escueladesarts.com/wp-content/uploads/fotografia-a-color.jpg" alt="logo" className="box-content h-15 w-15 p-4  absolute inset-y-0 left-0 w-16"></img>
                  <nav className="">
                    <a className="hover:text-white" href="#">Enlace 1</a> 
                    <a className="hover:text-white" href="#">Enlace 2</a> 
                    <a className="hover:text-white" href="#">Enlace 3</a>
                      <CartWidget />    
                  </nav>
            </div>
            
        </header>
    )
}
export default Navbar