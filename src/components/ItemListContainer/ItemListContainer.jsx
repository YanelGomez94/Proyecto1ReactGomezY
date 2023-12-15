import { useState, useEffect } from "react"
// import ItemCount from "../cartwidget/ItemCount/ItemCount"
import { pedirDatos } from "../../utils/utils"
import  ItemList  from "../ItemList/ItemList"



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)


    useEffect(() => {
      setLoading(true)

      pedirDatos().then((data) => {
      setProductos(data);
      setLoading(false)
    });
  
  },[])

    return (
       <>
         {
            loading
             ? <h2 className="text-center">Cargando...</h2>
             : <ItemList productos={productos} />
             
         }
          
       </>
  );
};


export default ItemListContainer;
