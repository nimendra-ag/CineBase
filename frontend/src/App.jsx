import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Categories from './Pages/Categories/Categories';
import Watchlist from './Pages/Watchlist/Watchlist';
import Account from './Pages/Account/Account';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import TVShows from './Pages/TVShows/TVShows';
import Movies from './Pages/Movies/Movies';
import Profile from './Pages/Profile/Profile';
import MovieDisplay from './Components/MovieDisplay/MovieDisplay';
import TVShowDisplay from './Components/TVShowDisplay/TVShowDisplay';
import MediaCategory from './Pages/MediaCategory/MediaCategory';
import MediaDisplay from './Components/MediaDisplay/MediaDisplay';
import Media from './Pages/Media/Media';
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
          <Route path='/login' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/tvshows' element={<MediaCategory category="TVShow"/>}/>
          <Route path='/movies' element={<MediaCategory category="Movie"/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/media' element={<Media/>}>
            <Route path=':mediaId' element={<Media/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
