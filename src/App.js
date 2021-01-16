import React from 'react';
import './App.css';
import Index from './molecules/navbar';
import Footer from './molecules/footer';
import Home from "./components/home-page";
import About from "./components/about-page";
import Projects from "./components/my-projects-page";
import Contacts from "./components/contacts-page";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    return (
        <>
            <Router>
                <Index/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/contacts" exact component={Contacts}/>
                </Switch>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
