import React,{useEffect,useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children,authentication = true}) {


    const navigate = useNavigate()
    cost [loader,setLoader]= useState(true)
    const authStatus =useSelector(state=> state.auth.status)

    useEffect(()=>{
         if(authentication && authStatus!=authentication){
          navigate("/login")
         } else if (!authentication && authStatus !== authentication){
          navigate("/")
         }
         setLoader(false)
         
        /*`
        if(authStatus === true){
          navigate("/")
        }else if(authStatus === false){
          navigate("/login")
        }      */
    },[authStatus,navigate,authentication ])
  return loader ? <h1>loading...</h1> : <>{children}</>
}

