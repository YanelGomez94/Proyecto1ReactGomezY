// import logo from '../../assets'; 
import './Navbar.css'
import CartWidget from '../cartwidget/Cart.jsx'
import React from 'react';
import { NavLink } from 'react-router-dom';


const links = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Peliculas",
      href: "/category/peliculas",
    },
    {
      label: "Series",
      href: "/category/series",
    },
  ];

const Navbar = () => {
    return(
        <header className="bg-green-800 text-lg  font-size: 1.5rem;">
          <div className="container m-auto py-6 flex">  
            <img src="https://www.ventanasur.com.ar/wp-content/uploads/2021/04/cine-argentino-2.jpg" alt="logo" className="box-content h-19 w-20 p-5 absolute inset-y-0 left-0"></img>
            <nav className="flex gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) => (
                    `text-lg uppercase font-semibold ${isActive ? "text-purple-400" : "text-black"}`
                  )}
                  >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <CartWidget />
          </div>
        </header>
    )
}
export default Navbar