import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { itemsInCart } = useContext(CartContext);



    return (
        <Link to="/cart" className={`flex items-center gap-1 cursor-pointer`}>
            <i className="bi bi-cart4"></i>
            <span className='text-white text-2xl'>{ itemsInCart() }</span>
        </Link>
    )
}

export default CartWidget;