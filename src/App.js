import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import {Route, Routes } from 'react-router-dom'
import About from './components/mainComponent/about/aboutComponent';
import Mongo from './components/mongo';
import Gomoku from './components/mainComponent/games/gomokuComponent';
import NoPage from './components/noPage';
import CarApi from './components/mainComponent/carApiFetching/redux';
import NavMenu from './components/navMenu';

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
              <Route path='/nopage' element={<NoPage/>}/>
            </Routes>
          </div>
          <div className="footer" ><Footer/></div>
        </div>
    
  );
}

export default App;
