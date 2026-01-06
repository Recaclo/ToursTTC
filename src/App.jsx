import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Servicios from "./pages/Servicios"

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path='/servicios' element={<Servicios/>}/>
        </Routes>       
        
      </main>

      <Footer />
      </>
  )
}

export default App
