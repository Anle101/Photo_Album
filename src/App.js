import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import {Route, Switch, useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
function App() {

  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial = {false}>
      <Switch location={location} key={location.pathname}>
          <Route path="/login"> 
            <Login /> 
          </Route>
          <Route path="/profile"> 
            <Profile /> 
          </Route>
      </Switch>
    </AnimatePresence>
   
  );
}

export default App;
