import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({productos}) => {

  return (
    <section className="container m-auto mt-8">
      <h2 className="text-4xl font-bold gap-10">Estrenos </h2>
      <hr />

      <div className="m-auto py-6 px-6">
         { productos.map((item) => <ItemCard key={item.id} item={item}/>)}
      </div> 
    </section>
    
    );
};

export default ItemList;

