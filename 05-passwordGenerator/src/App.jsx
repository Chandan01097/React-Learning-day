import { useCallback, useEffect, useState,useRef } from 'react'
import './index.css'
function App() {
 const[length,setlength]=useState(8)
 const [numberAllowed,setNumberAllowed]=useState(false)
 const[charAllowed, setCharAllowed]=useState(false)
 const[Password,setPassword]=useState("")
// useRef
const passwordRef= useRef(null)

const passwordGenerator = useCallback(() => {
  let pass = ""
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllowed) str += "0123456789"
  if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

  for (let i = 1; i <=length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
   pass += str.charAt(char);
  }
  setPassword(pass)
},[length,numberAllowed,charAllowed,setPassword])
// using useref 
const passwordcopy = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(Password)
},[Password])

 useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>   
 <div className="w-full max-w-md mx-auto
 shadow-md rounded-lg px-4 py-6 my-8 bg-gray-700">
  <h1 className="text-white text-2xl 
  font-semibold text-center mb-4">
    Password Generator
  </h1>
  <div className="flex bg-yellow-300 rounded-lg 
  overflow-hidden">
    <input
      type="text"
      value={Password}
      className="outline-none w-full text-black py-2 px-4 text-lg"
      placeholder="password"
      readOnly
      ref={passwordRef}
    />
    <button
    onClick={passwordcopy} 
    className='outline-none bg-blue-700  text-white
    px-3 py-0.5 shrink-0
    hover:bg-blue-900 '> copy </button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range"
      min={6}
      max={100}
       value={length}
       className='cursor-pointer'
       onChange={(e)=>{setlength(e.target.value)}}/>
       <label className='text-white'>
      Length:{length}</label>
    </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}   
      />
      <label htmlFor="numberInput" className='text-white' >Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
              setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput" className='text-white'>Characters</label>
      </div>
  </div>
</div>

    </>
  )
}

export default App
