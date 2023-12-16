import { useState, useEffect } from "react"
// import ItemCount from "../cartwidget/ItemCount/ItemCount"
import { pedirDatos } from "../../utils/utils"
import  ItemList  from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { MOCK_DATA } from "../../mock/data";



const ItemListContainer = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const {categoriaId} = useParams();

  //   useEffect(() => {
  //     const getData =new Promise(resolve => {
  //       setTimeout(() => {
  //         resolve(MOCK_DATA);
  //       }, 1000);
  //     });
  //     if (categoriaId) {
  //       getData.then(res => setData (res.filter(pelicula => pelicula.categoria ===categoriaId)));
  //     } else {
  //       getData.then(res => setData(res));
  //     }
  //   },[categoriaId])
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)

  const {} = useParams();

    useEffect(() => {
      setLoading(true);
      pedirDatos().then((data) => {
        setProductos(data);
        setLoading(false);
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
