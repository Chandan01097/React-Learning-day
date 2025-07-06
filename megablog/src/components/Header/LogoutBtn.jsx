import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
function LogoutBtn() {
    const dispatch = useDispatch(()=>{
        authService.logout().then(()=>{
            dispatch(logout()) 
        })
    })
  return (
    <button>
       Logout 
    </button>
  )
}

export default LogoutBtn
