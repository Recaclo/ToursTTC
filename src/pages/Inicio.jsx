import React from 'react';
import { Link } from 'react-router-dom';
import fotoHero from '../assets/Planbus.jpeg';

function Inicio() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 35, 102, 0.7), rgba(0, 35, 102, 0.7)), url(${fotoHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="inicio">
      {/* HERO con imagen local dinámica */}
      <section className="hero" style={heroStyle}>
        <h1 className="titulo-gigante">Transportadora</h1>
        <p>
          Renta de autobuses para servicio ejecutivo, turismo,
          congresos y traslados especiales.
        </p>
        <Link to="/cotizacion" className="btn-principal">Cotiza tu viaje</Link>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="bloque">
        <h2>¿Quiénes Somos?</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
          En <strong>Tours TTC</strong> somos una empresa especializada en
          transporte de pasajeros, comprometida con la seguridad,
          puntualidad y comodidad en cada viaje.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="bloque" style={{ backgroundColor: '#fff' }}>
        <h2>Nuestros Servicios</h2>
        <ul className="lista-servicios">
          <li><strong>Servicio Ejecutivo</strong><br/>Viajes corporativos con confort total.</li>
          <li><strong>Turismo</strong><br/>Conoce los mejores destinos de México.</li>
          <li><strong>Traslado de Grupos</strong><br/>Logística eficiente para cualquier número.</li>
          <li><strong>Congresos y Eventos</strong><br/>Puntualidad en citas profesionales.</li>
          <li><strong>Excursiones</strong><br/>Diversión segura para escuelas y familias.</li>
          <li><strong>Charter Internacional</strong><br/>Atención especializada a extranjeros.</li>
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className="bloque">
        <h2>¿Por qué elegirnos?</h2>
        <ul className="beneficios">
          <li>Unidades modernas y seguras</li>
          <li>Operadores capacitados</li>
          <li>Atención personalizada</li>
          <li>Puntualidad garantizada</li>
        </ul>
      </section>
    </div>
  );
}

export default Inicio;