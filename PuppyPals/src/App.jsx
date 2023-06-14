import {puppyList} from './data.js'
import './App.css'
import { useState } from 'react'

function App() {
  console.log(puppies)
  const [puppies, setPuppies] = useState(puppyList)

  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p>{puppy.name}</p>
          })
        }
      </div>
      
    </>
  )
}

export default App
