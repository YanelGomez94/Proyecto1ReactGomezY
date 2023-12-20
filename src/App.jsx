import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Navigate, Route , Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/title/:titleId' element={<ItemDetailContainer />} />

          <Route path='not-found' element= {<h2> Not found</h2>} />
          <Route path='*' element= {<Navigate to= {"Not found"}/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
