import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>FASE 5 - OPERAR</h1>
      <h1>DSW - UNAD</h1>
      <h2>Elaborado por: Luz Quitian Otalora</h2>
      <h3>Grupo: 301122_9</h3>
      <div className="card">
        <button type="button">
          <a href="index.html">Ir a la pagina de inicio</a>
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
