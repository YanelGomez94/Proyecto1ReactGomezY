import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({productos}) => {
//     const onAdd = (quantity) => {
//         console.log(`Compraste ${quantity} unidades`);
// };
      
    return (
    <section className="container m-auto mt-8">
      <h2 className="text-4xl font-bold">Productos </h2>
      <hr />

      <div className="flex flex-wrap justify-start gap-10 items-center">
         { productos.map((item) => <ItemCard  item={item}/>)}
      </div> 
    </section>
    
    );
};

export default ItemList

