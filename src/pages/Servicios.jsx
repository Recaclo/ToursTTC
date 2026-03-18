import React from 'react';
import fotoServicios from '../assets/Planbus.jpeg';

function Servicios() {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 35, 102, 0.8), rgba(0, 35, 102, 0.8)), url(${fotoServicios})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 20px',
    color: 'white',
    textAlign: 'center'
  };

  return (
    <div className="servicios-page">
      {/* Cabecera de la página */}
      <header style={headerStyle}>
        <h1>Nuestros Servicios</h1>
        <p className="intro-header">
          En <strong>Tours TTC</strong> ofrecemos soluciones de transporte
          seguras, cómodas y confiables.
        </p>
      </header>

      {/* Contenedor de servicios en Grid */}
      <section className="bloque">
        <div className="grid-servicios">
          <article className="tarjeta-servicio">
            <div className="decoracion-dorada"></div>
            <h2>Servicio Ejecutivo</h2>
            <p>
              Transporte de alta calidad para ejecutivos y empresas.
              Ideal para reuniones de negocio, traslados corporativos
              y atención a clientes VIP.
            </p>
          </article>

          <article className="tarjeta-servicio">
            <div className="decoracion-dorada"></div>
            <h2>Turismo</h2>
            <p>
              Viajes turísticos locales y foráneos con unidades cómodas
              y operadores capacitados, diseñados para disfrutar el trayecto
              con total tranquilidad.
            </p>
          </article>

          <article className="tarjeta-servicio">
            <div className="decoracion-dorada"></div>
            <h2>Traslado de Grupos</h2>
            <p>
              Soluciones eficientes para el traslado de grupos escolares,
              empresariales, deportivos o sociales, adaptándonos al tamaño
              y necesidades de cada grupo.
            </p>
          </article>

          <article className="tarjeta-servicio">
            <div className="decoracion-dorada"></div>
            <h2>Congresos y Eventos</h2>
            <p>
              Coordinación logística para congresos, convenciones y eventos
              especiales, garantizando puntualidad y organización en cada traslado.
            </p>
          </article>

          <article className="tarjeta-servicio">
            <div className="decoracion-dorada"></div>
            <h2>Excursiones</h2>
            <p>
              Transporte cómodo y seguro para excursiones escolares,
              culturales o recreativas, cuidando cada detalle del viaje.
            </p>
          </article>

          <article className="tarjeta-servicio">
            <div className="decoracion-dorada"></div>
            <h2>Charter Internacional</h2>
            <p>
              Servicio especializado para grupos internacionales,
              ofreciendo atención personalizada, operadores bilingües
              y rutas planeadas.
            </p>
          </article>
        </div>
      </section>

      {/* Botón de acción final */}
      <section className="cta-servicios">
        <h3>¿Listo para viajar con nosotros?</h3>
        <button className="btn-principal">Solicitar Cotización</button>
      </section>
    </div>
  );
}

export default Servicios;