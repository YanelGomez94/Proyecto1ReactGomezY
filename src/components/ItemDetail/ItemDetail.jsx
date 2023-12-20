
const ItemDetail = ({ item }) => {

  
    return (
      <div className="container m-auto mt-8">
        <h3 className="mt-4 text-2xl font-semibold">{item.name}</h3>
        <div className="flex gap-8 pt-4">
          <img src={item.image} alt={item.name}/>
          <div>
            <p>{item.description}</p>
            <p className="text-xl font-bold">Precio: ${item.price}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemDetail;