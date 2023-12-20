import { useState, useEffect } from "react"
import  ItemList  from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../utils/utils"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
      setLoading(true)

      pedirDatos() // <= Promise
          .then((data) => {
              const items = categoryId 
                              ? data.filter(prod => prod.category === categoryId)
                              : data

              setProductos(items)
          })
          .finally(() => setLoading( false ))
  }, [categoryId])
      
    return (
      <>
        {
        loading ? (<h2 className="text-center">Cargando...</h2>)
          : (<ItemList productos={productos} />)
        }
      </>
  );
};


export default ItemListContainer;
