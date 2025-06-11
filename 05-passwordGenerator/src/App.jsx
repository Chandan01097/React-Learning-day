import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
function App() {
 const[length,setlength]=useState(8)
 const [numberAllowed,notAllowed]=useState(false)
 const[useCharacter , notUseCharacter]=useState(false)
 const[Password,setPassword]=useState("")

const passwordGenerator = useCallback(() => {
  let pass = ""
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllowed) str += "0123456789"
  if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

  for (let i = 1; i <= array.length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
   pass = str.charAt(char);
  }
  setPassword(pass)
},[length,numberAllowed,useCharacter,setPassword])

  return (
    <>
   <div class="w-64 bg-black border
    border-pink-500 rounded-lg p-2 
    items-center justify-center">
  <span class="text-pink-500 text-sm text-center   ">Password Generator</span>
</div>

       
    </>
  )
}

export default App
