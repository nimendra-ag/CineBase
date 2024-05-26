import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Categories from './Pages/Categories/Categories';
import Watchlist from './Pages/Watchlist/Watchlist';
import Account from './Pages/Account/Account';
import Reviews from './Pages/Reviews/Reviews';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/account' element={<Account />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
