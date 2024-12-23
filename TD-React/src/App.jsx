import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logoEmsi from '../public/logo.png'
import viteLogo from '/vite.svg'
import './App.css'


// function Header(props) {
//   let name = "Header"
//   return (
//     <header>
//       <h1>My Header is {props.name}</h1>
//     </header>
//   )
// }

function Header() {
  return (
    <header>
      <img src={logoEmsi} className="logo" alt="Emsi logo"  style={{ width:'380px', height: '120px' }}/>
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  )
}
function MainContent() {
  return (
    <div>
      <p>Ici, nous afficherons des informations interessantes </p>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <p>Tous droits réservés - Mzioued Dounia</p>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Header></Header> */}
        {/* <Header name="Header from App"></Header> */}
        <Header></Header>
        <MainContent></MainContent>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Introduction</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer></Footer>
    </>
  )
}

export default App
