import { Link } from "react-router-dom";
import Boton from "../boton/boton";

const ItemCard = ({item}) => {

    return ( 
        <article key={item.id} className="w-100">
            <img src={item.image} alt={item.name} width="700" height="700"/>
            <h3 className="text-2x1 font-semibold">{item.name}</h3>
            <p className="text-xl font-bold">Precio: ${item.price}</p>

            <Boton>
             <Link to={`/title/${item.id}`}>Ver más</Link>
            </Boton>
        </article>
    )
}

export default ItemCard;