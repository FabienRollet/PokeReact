import { useState } from 'react'
import './App.css'
import PokemonCard from './componants/PokemonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<PokemonCard></PokemonCard>
    </>
  )
}

export default App
