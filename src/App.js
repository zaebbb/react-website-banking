import './App.css';
import {useState} from 'react';
import Navbar from "./components/Navbar/index";
import Sidebar from './components/Sidebar/index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Footer from './components/Footer';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (

    
    <Router>
    <Sidebar 
    isOpen={isOpen}
    toggle={toggle}
    /> 
    <Navbar 
    toggle={toggle}
    />
    <Switch>
      <Route 
      path="/" 
      component={Home} 
      exact />
      <Route 
      path="/signin" 
      component={SigninPage} 
      exact />
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
