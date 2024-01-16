import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { titleId } = useParams()

  useEffect(() => {
    setLoading(true);
      // 1.- armar la referencia
    const docRef = doc(db, 'productos', titleId)

    // 2.- llamar a la ref
    getDoc( docRef )
      .then((docSnapshot) => {
        console.log(docSnapshot)
        const doc = {
          ...docSnapshot.data(),
          id: docSnapshot.id
        }

        setItem(doc)
      })
      .finally(() => setLoading(false))

  }, [titleId]);

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