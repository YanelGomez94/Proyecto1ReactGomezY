import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter } from "react-router-dom";




function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <ItemListContainer />
      </BrowserRouter>
      
      
    </>
  )
}

export default App
