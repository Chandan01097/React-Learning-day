import React,{useEffect,useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children,authentication = true}) {


    const navigate = useNavigate()
    cost [loader,setLoader]= useState(true)
    const authStatus =useSelector(state=> state.auth.status)

    useEffect(()=>{

    },[authStatus,navigate,authentication ])
  return (
    <div>
      
    </div>
  )
}

