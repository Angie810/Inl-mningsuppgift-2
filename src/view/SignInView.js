import React from 'react'
import { useState, useContext } from 'react'
import {UserContext} from '../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'

export const SignInView = () => {
    const history = useHistory()
    const [user, setUser] = useState({username:"", password:""})
  
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const login = () => {
        setAuthenticatedUser(user.username)
        localStorage.setItem("username",user.username)
        history.push('/')
    }

    return(
        <div>
        <span>Username: </span> <input type="text" onChange={e=> setUser({username:e.target.value})}/>
        <span>Password: </span> <input type="password" onChange={e=> setUser({password:e.target.value})}/>
        <button onClick={()=>login()}>Login</button>
        </div>
    )
}