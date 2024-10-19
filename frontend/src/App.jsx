import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Watchlist from './Pages/Watchlist/Watchlist';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Profile from './Pages/Profile/Profile';
import MediaCategory from './Pages/MediaCategory/MediaCategory';
import Media from './Pages/Media/Media';
import ChangePassword from './Pages/ChangePassword/ChangePassword';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/login' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/tvshows' element={<MediaCategory category="TVShow"/>}/>
          <Route path='/movies' element={<MediaCategory category="Movie"/>}/>
          <Route path='/profile' element={<Profile/>}/>
          {/* <Route path='/changepassword' element={<ChangePassword/>}/> */}
          <Route path='/media' element={<Media/>}>
            <Route path=':mediaId' element={<Media/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
