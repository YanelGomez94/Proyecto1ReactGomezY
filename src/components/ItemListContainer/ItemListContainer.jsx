import React from "react";
import Title from '../Title/Title';
import ItemCount from "../cartwidget/ItemCount/ItemCount";



const ItemListContainer = ({texto}) => {
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`)   
  }

    return (
      <>
      <Title greeting={texto}  />
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      </>  
        
        
    )
}

export default ItemListContainer