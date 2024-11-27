import { useState } from 'react'
import './App.css'
import { Button } from 'react-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{count}</p>
      <Button onClick={() => {setCount(count + 1)}}>点我</Button>
    </>
  )
}

export default App
