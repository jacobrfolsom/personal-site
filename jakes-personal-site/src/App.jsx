import { useRef, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";

function App() {
  const childRef = useRef(null)

  return (
        <div className='App'>
            <Navbar/>
            {/*<Header/> forwardedRef={childRef}*/}
            {/*<About/>*/}
        </div>
  )
}

export default App
