import ItemCount from "../cartwidget/ItemCount/ItemCount"

const ItemCard = ({item}) => {

    return ( 
        <article key={item.id} className="w-80">
        <img src={item.img} alt={item.name}/>
        <h3 className="text-2x1 font-semibold">{item.name}</h3>
        <hr/>
        <p>{item.description}</p>
        <p className="text-xl font-bold">Precio: ${item.price}</p>

        <ItemCount />


        {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
        </article>
    )
}

export default ItemCard