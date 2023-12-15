import React, {useState} from "react";
import './ItemCount.css'

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    const addToCart = () => {
        onAdd(count);
    }

    return (

        
        <div className="counter">
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
                <button onClick={addToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
 };
export default ItemCount;
