import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';



const links = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Peliculas",
      href: "/category/Peliculas",
    },
    {
      label: "Series",
      href: "/category/Series",
    },
  ];

const Navbar = () => {
  
  return (
    <header className="bg-blue-300">
      <div className="container m-auto py-6 flex justify-between items-center">

      <img src="https://www.ventanasur.com.ar/wp-content/uploads/2021/04/cine-argentino-2.jpg" alt="logo" className="box-content h-19 w-20 p-5 absolute inset-y-0 left-0"></img>

        <nav className="flex gap-4">
          {links.map((link) => (

            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (
                `text-lg uppercase font-semibold ${isActive ? "text-purple-400" : "text-black"}`
              )}>
              {link.label}
            </NavLink>

          ))}

          <CartWidget />
        </nav>

      </div>

    </header>
  );
};

export default Navbar;