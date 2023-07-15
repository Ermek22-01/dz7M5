import './App.css'
import ProductsList from "./components/ProductsList.jsx";
import NavBar from "./components/NavBar.jsx";
import CartPage from './pages/CartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App()
{

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<ProductsList />} />
          <Route path='/cart' element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
