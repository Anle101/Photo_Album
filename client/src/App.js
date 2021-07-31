import {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import {Route, Switch, useLocation} from 'react-router-dom';
import {GlobalContext} from './context/GlobalContext'; 
import { AnimatePresence } from "framer-motion";
import Register from './components/Register';
import useToken from './components/useToken';

function App() {

  const [CurrentProfile, setCurrentProfile] = useState({});
  const {token, setToken} = useToken();
  const location = useLocation();
  
  
  return (
    <AnimatePresence  initial = {false}>
      
        <Switch location={location} key={location.pathname}>
          <GlobalContext.Provider value={{CurrentProfile, setCurrentProfile}}>
            {!token &&  
              <Login setToken={setToken}/>
            }
            {token && 
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
              </>
            }
            
            </GlobalContext.Provider>
        </Switch>
      
    </AnimatePresence>
   
  );
}

export default App;
