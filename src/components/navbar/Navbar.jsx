// import logo from '../../assets'; 
import './Navbar.css'
import CartWidget from '../cartwidget/Cart.jsx'
import React from 'react';

const Navbar = () => {
    return(
        <header className="bg-green-800 text-lg  font-size: 1.5rem; ;">
            <div className="container m-auto py-6 flex justify-between items-center">
                <h1 className="">CineÉpico</h1>
                {/* <img src={logo} alt="Logo" className="w-16 h-16" /> */}
                <img src="https://www.ventanasur.com.ar/wp-content/uploads/2021/04/cine-argentino-2.jpg" alt="logo" className="box-content h-19 w-20 p-5 absolute inset-y-0 left-0"></img>
                  <nav className="">
                    <a className="hover:text-white" href="#">Inicio</a>
                    <a className="hover:text-white" href="#">Peliculas</a> 
                    <a className="hover:text-white" href="#">Series</a> 
                    <a className="hover:text-white" href="#">Categorías</a>
                      <CartWidget />    
                  </nav>
            </div>
            
        </header>
    )
}
export default Navbar