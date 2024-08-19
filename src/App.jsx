import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
            <Header />
            <Router>
              <Navbar></Navbar>
              <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
              </Routes>
            </Router>
            {/* <Navbar /> */}

            
            <Footer />
        </div>
    </>
  )
}

export default App
