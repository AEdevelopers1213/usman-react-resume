// Import Component
import Menu from "./components/Menu"
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import {Switch, Route, Redirect} from 'react-router-dom';

// import dependencies
// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./assets/scss/main.scss";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/"  component={Home}/>
                <Route exact path="/about"  component={About}/>
                <Route exact path="/resume"  component={Resume}/>
                <Route exact path="/portfolio"  component={Portfolio}/>
                <Route exact path="/contact"  component={Contact}/>
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
