
import React, { Component,Fragment } from "react";
import Tilt from 'react-tilt'
import anasayfaresmi from '../src/assets/images/abouts.jpg'
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.scss'
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom";
import BodyContainer from './screens/Body/index';
import { registerNav } from "../src/modules/Navigation/index";
import { createBrowserHistory } from "history";
import Home from "./views/Home/Home";
import Phone from './screens/Phones/index'
import Accesorie from './screens/Accesories/index';
import Game from './screens/Game/index';
import Notebook from './screens/Notebooks/index';
import Stuff from './screens/Stuff/index';
import Tv from './screens/Tv/index';
import HomeCartView from './components/HomeCartView'
import Header from './components/Header';
import { func } from "prop-types";
import Hamburger from './components/Hamburger';
import Navbar from './components/NavBar/NavBar'
import CreditCard from './components/CreditCart/CreditCard'
import Cart from './components/Cart/Cart'

import Heading from './components/Heading'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AOS.init();
  }
  render() {
    const browserHistory = createBrowserHistory();
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
              <Route exact  path="/"  component={props => {
                    return (<Start/> ); }} />

              <Route exact  path="/home"  component={props => {
                    return (<Home/> ); }} />
                    
              <Route exact path="/phone" component={props => {
                    return (  <Phone /> ); }} /> 

                <Route exact path="/game" component={props => {
                    return (  <Game /> ); }} /> 

                <Route exact path="/notebook" component={props => {
                    return ( <Notebook />); }} />

                  <Route exact path="/stuff" component={props => {
                    return (  <Stuff /> ); }} />  

                      <Route  exact path="/tv" component={props => {
                    return (  <Tv />); }} /> 

                      <Route exact path="/accesorie" component={props => {
                    return (  <Accesorie /> ); }} />

                    
                 
                       <Route exact path="/hamburger" component={props => {
                    return (  <Hamburger/> ); }} /> 
                    
                    <Route exact path="/creditcard" component={props => {
                    return (  <CreditCard/>); }} /> 
                      <Route exact path="/cart" component={props => {
                    return (  <Cart/>); }} /> 
                      
                      
                    
                   
                   
                   
 
                  
          
          
         
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;



function Start() {
  return  <div className="container">
  
  <img src={anasayfaresmi} alt="" style={{width:"110%",height:"110%"}}    />
  
   
    
  
</div>;
}





/*
<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner"> 👽 </div>
</Tilt

 <Route exact path="/product" component={props => {
                    return (<BaseLayout>  <SingleProductContainer /></BaseLayout> ); }} />


                    <Route  exact path="/category" component={props => {
                    return (  <CategoryContainer /> ); }} /> 

*/