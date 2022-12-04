import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footerComponent';
import {Route, Routes } from 'react-router-dom'
import About from './components/mainComponent/about/aboutComponent';
import Mongo from './components/mainComponent/mongo/mongoComponent';
import Gomoku from './components/mainComponent/games/gomokuComponent';
import NavBarStrap from './components/navComponent';
import NoPage from './components/mainComponent/noPageComponent';
import CarApi from './components/mainComponent/carApiFetching/carApi';

function App() {
  return (
        <div className="body">
          <div className="topnav" >
            <NavBarStrap/>
          </div>
          <div className="content">
            <Routes>
              <Route path='/' element={<About/>}/>
              <Route path='/mongo' element={<Mongo/>}/>
              <Route path='/gomoku' element={<Gomoku/>}/>
              <Route path='/redux' element={<CarApi/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/*' element={<NoPage/>}/>
            </Routes>
          </div>
          <div className="footer" ><Footer/></div>
        </div>
    
  );
}

export default App;
