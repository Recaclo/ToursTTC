import React from 'react';
import fotoNosotros from '../assets/Planbus.jpeg'; // Puedes usar la misma o una diferente

function Nosotros() {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 35, 102, 0.8), rgba(0, 35, 102, 0.8)), url(${fotoNosotros})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 20px',
    color: 'white',
    textAlign: 'center'
  };

  return (
    <div className="nosotros">
      {/* HEADER DE PÁGINA */}
      <header style={headerStyle}>
        <h1>Sobre Tours TTC</h1>
        <p>Más de 20 años conectando destinos con seguridad.</p>
      </header>

      {/* SECCIÓN HISTORIA / IDENTIDAD */}
      <section className="bloque">
        <div className="contenedor-historia">
          <div className="texto-historia">
            <h2>Nuestra Trayectoria</h2>
            <p>
              Tours TTC nació con la visión de ofrecer un transporte que combine la 
              calidez humana con la excelencia operativa. Nos especializamos en 
              entender que cada viaje es único, ya sea un traslado ejecutivo o una 
              excursión familiar.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN MISIÓN Y VISIÓN */}
      <section className="bloque-oscuro">
        <div className="grid-mision-vision">
          <div className="tarjeta-mv">
            <h3>Nuestra Misión</h3>
            <p>Proporcionar servicios de transporte terrestre seguros, puntuales y confortables, superando las expectativas de nuestros clientes a través de un equipo profesional y unidades de vanguardia.</p>
          </div>
          <div className="tarjeta-mv">
            <h3>Nuestra Visión</h3>
            <p>Ser la empresa líder en soluciones de transporte en la región, reconocida por nuestra innovación constante y el compromiso inquebrantable con la seguridad del pasajero.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN VALORES */}
      <section className="bloque">
        <h2>Nuestros Valores</h2>
        <div className="grid-valores">
          <div className="valor">
            <span className="icono-valor">🛡️</span>
            <h4>Seguridad</h4>
            <p>Nuestra prioridad absoluta en cada kilómetro recorrido.</p>
          </div>
          <div className="valor">
            <span className="icono-valor">🤝</span>
            <h4>Integridad</h4>
            <p>Transparencia y honestidad en cada trato comercial.</p>
          </div>
          <div className="valor">
            <span className="icono-valor">✨</span>
            <h4>Calidad</h4>
            <p>Atención al detalle para una experiencia premium.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;