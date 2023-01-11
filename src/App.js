import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from 'react-router-dom'
import NavMenu from './components/NavMenu';
import Home from './pages/home/Home';
import Mongo from './pages/mongo/Mongo';
import Gomoku from './pages/gomoku/Gomoku';
import CarApi from './pages/carApi/CarApi';
import Movie from './pages/movie/Movie';
import Footer from './components/Footer';

function App() {
  return (
        <div className="body">
          <div className="topnav" >
            <NavMenu/>
          </div>
          <div className="content">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/mongo' element={<Mongo/>}/>
              <Route path='/gomoku' element={<Gomoku/>}/>
              <Route path='/redux' element={<CarApi/>}/>
              <Route path='/movie' element={<Movie/>}/>
            </Routes>
          </div>
          <div className="footer" ><Footer/></div>
        </div>
    
  );
}

export default App;
