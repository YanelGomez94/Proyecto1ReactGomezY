import { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { titleId } = useParams()

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((data) => {
        setItem( data.find(titulo => titulo.id === Number(titleId)))
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {
         loading ? (<h2 className="text-center">Cargando...</h2>)
       : (
        <ItemDetail item={item}/>
      )}
    </>
  );
};

export default ItemDetailContainer;