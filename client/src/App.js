import {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import {Route, Switch, useLocation} from 'react-router-dom';
import {GlobalContext} from './context/GlobalContext'; 
import { AnimatePresence } from "framer-motion";
import Register from './components/Register';
import useToken from './components/useToken';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {

  const [CurrentProfile, setCurrentProfile] = useState({});
  const {token, setToken} = useToken();
  const location = useLocation();
  
  
  return (
    <AnimatePresence  initial = {false} exitBeforeEnter>
      
        <Switch location={location} key={location.pathname}>
          <GlobalContext.Provider value={{CurrentProfile, setCurrentProfile,token}}>
          
            {/*!token &&  
              <Login setToken={setToken}/> */
            }
            {//token && 
              <>
                <Route path="/login">
                  <Login setToken={setToken}/>
                </Route>
                <Route path="/register"> 
                  <Register /> 
                </Route>
                <Route path="/profile"> 
                  <Profile /> 
                </Route>
                <Route path="/home"> 
                  <Navbar />
                  <Home /> 
                </Route>
              </>
            }
            
            </GlobalContext.Provider>
        </Switch>
      
    </AnimatePresence>
   
  );
}

export default App;
