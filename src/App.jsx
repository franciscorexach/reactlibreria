import './App.css'
import Home from './assets/components/Home'
import Navbar from './assets/components/Navbar'
import Products from './assets/components/Products'
import CartWidget from './assets/components/CartWidget'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './assets/components/ItemDetailContainer'

function App() {

  const data = useGetFirebase()
  
  return (
 <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product-details/:title/:id" element={<ItemDetailContainer />} />
      <Route path="/components" element={<CartWidget />} />
    </Routes>
  </BrowserRouter>    
  )
}

export default App
