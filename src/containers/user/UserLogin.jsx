import React , {useCallback, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { userActions } from '../../modules/user.action'
import { User } from '../../templates'
export default function UserLogin(){
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    
    return (<User>
    <h1>Signin Form</h1> <form>
    <table  className='tab_layer'>
       
        <tr>
            <td>ID : </td>
            <td><input type="text" onChange={e => setUserId(`${e.target.value}`)}/></td>
        </tr>
        <tr>
            <td> PW : </td>
            <td> <input type="text" onChange={e => setPassword(`${e.target.value}`)}/> </td>
        </tr>
        <tr>
            <td colspan={2}>
                <input type="button" value="LOGIN" onClick= {e => dispatch(userActions.login(userId,password))}/>
                <input type="button" value="CANCEL" onClick= {e => alert(`Cancel`)}/>
            </td>
        </tr>
       
    </table> </form>
    </User>)
 }