import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-[]{}+~`"

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)

    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-600 ">
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">

          <input type="text"
            value={password}
            className='w-full outline-none py-1 px-3'
            placeholder='Password'
            readOnly



            

          />
        </div>
      </div>
    </>
  )
}

export default App
