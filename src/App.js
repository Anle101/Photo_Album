import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import {Link, Route, Switch} from 'react-router-dom';
import { motion } from "framer-motion";
function App() {
  return (
    <Switch>
      <Route path="/login"> 
        <Login /> 
      </Route>
      <Route path="/profile"> 
        <Profile /> 
      </Route>

    </Switch>
  );
}

export default App;
