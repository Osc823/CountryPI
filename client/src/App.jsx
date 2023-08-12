//import './App.css';
import Home from './views/Home/Home';
import {Route, Routes, useLocation} from "react-router-dom";
import Landing from './views/Landing/Landing';
import Form from './views/Form/Form';
import Detail from './views/Details/Details';
import Navbar from './components/Navbar/Navbar';
import Activity from './views/Activity/Activity';


function App() {
  const location = useLocation();

  return (
    <div>
      
      {location.pathname !== "/" &&  <Navbar/>}
       
        <Routes>
          <Route exact path={"/"} Component={Landing}/>
          <Route path={'/home'} Component={Home}/>
          <Route path={"/create"} Component={Form}/>
          <Route path={"/activity"} element={<Activity/>}/>
          <Route path={"/detail/:id"} Component={Detail}/>
        </Routes>
     
      
    </div>
  )
}

export default App;
