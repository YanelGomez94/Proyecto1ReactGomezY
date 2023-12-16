// import logo from '../../assets'; 
import './Navbar.css'
import CartWidget from '../cartwidget/Cart.jsx'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <header className="bg-green-800 text-lg  font-size: 1.5rem; ;">
            <div className="container m-auto py-6 flex justify-between items-center">
                <h1 className="">CineÉpico</h1>
                
                <img src="https://www.ventanasur.com.ar/wp-content/uploads/2021/04/cine-argentino-2.jpg" alt="logo" className="box-content h-19 w-20 p-5 absolute inset-y-0 left-0"></img>
                <nav className="">
                    <NavLink className="hover:text-white" to='/'>
                        Inicio
                    </NavLink>
                    <NavLink className="hover:text-white" to='/ categoria/peliculas'>
                        Peliculas
                    </NavLink> 
                    <NavLink className="hover:text-white" to='/ categoria/series'>
                        Series
                    </NavLink> 
                    <NavLink className="hover:text-white" href="#">
                        Categorías
                    </NavLink>
                    <CartWidget />    
                </nav>
            </div>
            
        </header>
    )
}
export default Navbar