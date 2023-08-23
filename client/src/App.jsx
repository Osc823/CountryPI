//import './App.css';
import Home from './views/Home/Home';
import {Route, Routes} from "react-router-dom";
import Landing from './views/Landing/Landing';
import Form from './views/Form/Form';
import Detail from './views/Details/Details';
import Navbar from './components/Navbar/Navbar';
import Activity from './views/Activity/Activity';
import PaginaError from './components/NotFound/pagina400';


function App() {

  return (
    <div>
       
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<><Navbar/><Home/></>}/>
        <Route path="/create" element={<><Navbar/><Form/></>}/>
        <Route path="/activity" element={<><Navbar/><Activity/></>}/>
        <Route path="/detail/:id" element={<><Navbar/><Detail/></>}/>
        <Route path="*" element={<PaginaError/>} /> 
      </Routes>
     
      
    </div>
  )
}

export default App;
