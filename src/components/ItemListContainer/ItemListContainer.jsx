import React from "react";
import Title from '../Title/Title';
import ItemCount from "../cartwidget/ItemCount/ItemCount";


const films = [
  {id: 1,
  image: "https://elcomercio.pe/resizer/di69ThjoAgtpoOI6lOD33wNJxOM=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UWPNCW3OQNAKZAC7NDTMEBVMAM.jpg",
  description:"Avatar: El camino del agua es una emocionante película de ciencia ficción dirigida por James Cameron y protagonizada por Sam Worthington, Zoe Saldana y Sigourney Weaver. La trama sigue a Jake Sully, un ex-marine que se une a un programa experimental en Pandora, un planeta alienígena habitado por una tribu de seres humanoides conocidos como Na vi.La historia se desarrolla a medida que Jake se involucra con los Na'vi y se da cuenta de la importancia de proteger su hogar y su cultura de la ambición y la avaricia de la humanidad. A medida que Jake se sumerge en la vida de los Na'vi y se enamora de una de sus líderes, Neytiri, se ve obligado a tomar una posición en una lucha épica entre dos mundos.",
  },
  {id: 2,
  image: "https://pics.filmaffinity.com/m3gan-570441440-large.jpg",
  description:"M3GAN es una maravilla de la inteligencia artificial, una muñeca realista programada para ser la mejor compañera de los niños y la mayor aliada de los padres. Diseñada por Gemma, M3GAN es capaz de escuchar, observar y aprender mientras se convierte en amiga, profesora, compañera de juegos y protectora del niño al que se vincule. Cuando, inesperadamente, Gemma se convierte en la tutora legal de Cady, su sobrina huérfana de 9 años, no sabe muy bien qué hacer ni se siente preparada para ejercer de madre. Sometida a un intenso estrés laboral, Gemma decide vincular su prototipo de M3GAN a Cady en un intento de resolver ambos problemas, pero no tardará en descubrir las inimaginables consecuencias de su decisión. (FILMAFFINITY)",
  }, 
  {id: 3,
  image: "https://es.web.img3.acsta.net/c_310_420/pictures/22/03/29/15/57/1533124.jpg",
  description:"Top Gun: Maverick se sitúa 34 años después de la película original, y sigue a Pete Maverick Mitchell mientras entrena a un grupo de nuevos pilotos de combate en la escuela Top Gun. En la trama, Maverick lucha por adaptarse a un mundo cambiado y enfrenta la pérdida de su amigo y compañero, Nick Goose Bradshaw.La película explora temas de legado, amistad y superación personal, mientras Maverick intenta demostrar su valía y mantener su lugar como uno de los mejores pilotos de combate del mundo. La pelicula promete ser una emocionante montaña rusa de acción, drama y emoción.",
  } ,
  {id: 4,
  image: "https://pics.filmaffinity.com/smile-843278209-mmed.jpg",
  description:"Después de presenciar un incidente extraño y traumático que involucra a un paciente, la Dra. Rose Cotter (Sosie Bacon) comienza a experimentar sucesos aterradores que no puede explicar. A medida que un terror abrumador comienza a apoderarse de su vida, Rose debe enfrentar su inquietante pasado para poder sobrevivir y escapar de su nueva y horrible realidad.",
  }
  

]

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