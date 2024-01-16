import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Boton from "../../ejemplos/boton";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import trashIcon from '../../assets/trashicon.webp';

const CartView = () => {
  const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);

  if (cart.length === 0) return <EmptyCart />

  return (
    <section className="container m-auto mt-8">
      <h2 className="text-4xl font-semibold">Tu Compra</h2>
      <hr />

      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex gap-3 border-b my-4">
            <img src={item.image} alt="Cart img" className="w-32 order-first" />
             <div className="order-last">
              <h3 className="text-2xl">{item.name}</h3>
              <p className="text-2xl font-bold">
                $ {item.price * item.cantidad}
              </p>
              <p>Cantidad: {item.cantidad}</p>

              <Boton onClick={() => removeItem(item.id)}>
                <img src={trashIcon} className="w-10" alt="trash icon" />
              </Boton>
            </div>
          </li>
        ))}
      </ul>

      <h4 className="text-4xl font-semibold">TOTAL: ${totalCart()}</h4>
      <Boton onClick={clearCart}>Vaciar carrito</Boton>
      <Boton><Link to="/checkout">Terminar mi compra</Link></Boton>
    </section>
  );
};

export default CartView;