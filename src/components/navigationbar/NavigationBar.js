import React ,{useContext} from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/images/undraw_zoom_in_1txs.png'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/global/provider/UserProvider'


export const NavigationBar = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

 return(
     <div className="navWrapper">
         <img onClick={()=> history.push('/')} 
         src={Logotype} alt="logotype"
         className="logo"/>
         <span onClick={()=> history.push('/signin')} className="signin">Sign in</span>
         <h3>{authenticatedUser}</h3>
     </div>
 )
}