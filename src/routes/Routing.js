import React, {useState, useEffect, useContext} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { ChipsView } from '../view/ChipsView'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'
import  Login  from '../components/Login/Login'
import {UserContext} from '../shared/global/provider/UserProvider'
 
// function setToken(userToken) {
//     sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//     const tokenString = sessionStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
// }


export const Routing = (props) => {
    // const token = getToken()

    // if(!token) {
    //     return <Login setToken={setToken} />
    //   }
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    
    useEffect(()=>{
        setAuthenticatedUser(localStorage.getItem("username"))
    },[])
    
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/chips" component={ChipsView} />
                <Route exact path="/signin" component={SignInView} />
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}