import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Components/Home';
import { Redirect, Route, Switch, } from 'react-router';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
