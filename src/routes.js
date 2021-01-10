import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App'
import Contact from './contact'
import About from './about'
import Cart from './cart'
import Checkout from './checkout'
import Products from './products'

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' render = {(props) => {
                    return(
                        <App />
                    )  
                }} />
                <Route exact path='/products' render = {(props) => {
                    return (
                        <Products />
                    )
                }} />
                <Route exact path='/contact' render = {(props) => {
                    return (
                        <Contact />
                    )
                }} />
                <Route exact path='/about' render = {(props) => {
                    return (
                        <About />
                    )
                }} />
                <Route exact path='/cart' render = {(props) => {
                    return (
                        <Cart />
                    )
                }} />
                <Route exact path='/checkout' render = {(props) => {
                    return (
                        <Checkout />
                    )
                }} />
            </Switch>
        </Router>
    );
}

export default Routes;