import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
