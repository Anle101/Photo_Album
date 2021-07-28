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
  //const {Token, setToken} = useToken();
  const location = useLocation();
  /*if (!Token) {
    return <Login setToken={setToken}/>
  }*/
  
  return (
    <AnimatePresence  initial = {false}>
      
        <Switch location={location} key={location.pathname}>
          <GlobalContext.Provider value={{CurrentProfile, setCurrentProfile}}>
            <Route path="/login"> 
              <Login /> 
            </Route>
            <Route path="/register"> 
              <Register /> 
            </Route>
            <Route path="/profile"> 
              <Profile /> 
            </Route>
            </GlobalContext.Provider>
        </Switch>
      
    </AnimatePresence>
   
  );
}

export default App;
