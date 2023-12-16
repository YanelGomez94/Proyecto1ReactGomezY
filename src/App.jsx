import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route , Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/ category/:categoryId' element={<ItemListContainer />} />
          <Route path='/description/:descriptionId' element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
