import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import {Route, Routes } from 'react-router-dom'
import About from './components/About/aboutComponent';
import Mongo from './components/mongo';
import Gomoku from './components/Gomoku/gomoku';
import CarApi from './components/Redux/redux';
import NavMenu from './components/navMenu';
import Movie from './components/Movie/Movie';

function App() {
  return (
        <div className="body">
          <div className="topnav" >
            <NavMenu/>
          </div>
          <div className="content">
            <Routes>
              <Route path='/' element={<About/>}/>
              <Route path='/mongo' element={<Mongo/>}/>
              <Route path='/gomoku' element={<Gomoku/>}/>
              <Route path='/redux' element={<CarApi/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/movie' element={<Movie/>}/>
            </Routes>
          </div>
          <div className="footer" ><Footer/></div>
        </div>
    
  );
}

export default App;
