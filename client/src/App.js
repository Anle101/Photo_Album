import {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import {Route, Switch, useLocation,Redirect} from 'react-router-dom';
import {GlobalContext} from './context/GlobalContext'; 
import { AnimatePresence } from "framer-motion";
import Register from './components/Register';
import useToken from './components/useToken';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Upload from './components/Upload';
import UploadSection from './components/UploadSection';
import EditProfileSection from './components/EditProfileSection';

function App() {

  const [CurrentProfile, setCurrentProfile] = useState({});
  const {token, setToken} = useToken();
  const {LoggedIn, setLoggedIn} = useState();
  const location = useLocation();
  
  
  return (
    <AnimatePresence  initial = {false} exitBeforeEnter>
      
        <Switch location={location} key={location.pathname}>
          <GlobalContext.Provider value={{CurrentProfile, setCurrentProfile,token, setToken}}>
          
            {/*!token &&  
              <Login setToken={setToken}/> */
            }
            {//token && 
              <>
                <Route path="/login">
                  <Login setToken={setToken}/>
                </Route>
                <Route path="/upload">
                  <Navbar /> 
                  <UploadSection />
                </Route>
                <Route path="/register"> 
                  <Register /> 
                </Route>
                <Route path="/profile">
                  <Navbar /> 
                  <Profile /> 
                </Route>
                <Route path="/editprofile">
                  <Navbar /> 
                  <EditProfileSection /> 
                </Route>
                <Route path="/home"> 
                  <Navbar />
                  <Home /> 
                </Route>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
              </>
            }
            
            </GlobalContext.Provider>
        </Switch>
      
    </AnimatePresence>
   
  );
}

export default App;
