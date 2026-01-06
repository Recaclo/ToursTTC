function Inicio() {
  return (
    <div className="inicio">
      {/* HERO */}
      <section className="hero">
        <h1>Transporte Seguro y Confiable</h1>
        <p>
          Renta de autobuses para servicio ejecutivo, turismo,
          congresos y traslados especiales.
        </p>
        <button className="btn-principal">Cotiza tu viaje</button>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="bloque">
        <h2>¿Quiénes Somos?</h2>
        <p>
          En <strong>Tours TTC</strong> somos una empresa especializada en
          transporte de pasajeros, comprometida con la seguridad,
          puntualidad y comodidad en cada viaje.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="bloque">
        <h2>Nuestros Servicios</h2>
        <ul className="lista-servicios">
          <li>Servicio Ejecutivo</li>
          <li>Turismo</li>
          <li>Traslado de Grupos</li>
          <li>Congresos y Eventos</li>
          <li>Excursiones</li>
          <li>Charter para Grupos Internacionales</li>
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
  )
}

export default Inicio
