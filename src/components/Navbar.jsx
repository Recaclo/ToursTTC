import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Tours TTC</h2>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
