import React, { useState } from 'react';

function Cotizacion() {
  const [datos, setDatos] = useState({
    origen: '',
    destino: '',
    pasajeros: 1,
    salida: '',
    regreso: '',
    detalles: ''
  });

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };
  const enviarWhatsApp = () => {
    const mensaje = `Hola Tours TTC, me gustaría cotizar un viaje de ${datos.origen} a ${datos.destino} para ${datos.pasajeros} personas.`;
    const url = `https://wa.me/5562094863?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Esto evita que la página se recargue
    alert("Gracias por tu interés. En breve nos pondremos en contacto contigo.");
    // Aquí podrías llamar a enviarWhatsApp() también si quieres
  };

  return (
    <div className="bloque">
      <h2>Cotiza tu Viaje</h2>
      <form className="formulario-cotizacion" onSubmit={handleSubmit}>
        <div className="grid-form">
          <input type="text" name="origen" placeholder="Lugar de Origen" onChange={handleChange} />
          <input type="text" name="destino" placeholder="Destino Principal" onChange={handleChange} />
          <input type="number" name="pasajeros" placeholder="Número de personas" onChange={handleChange} />
          <div className="campo-fecha">
            <label>Fecha de Salida:</label>
            <input type="date" name="salida" onChange={handleChange} />
          </div>
          <div className="campo-fecha">
            <label>Fecha de Regreso:</label>
            <input type="date" name="regreso" onChange={handleChange} />
          </div>
        </div>
        <textarea
          name="detalles"
          placeholder="Cuéntanos más (itinerario, movimientos locales, paradas intermedias...)"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn-principal">Enviar Solicitud</button>
        <button type="button" onClick={enviarWhatsApp} className="btn-whatsapp">Enviar por WhatsApp</button>
      </form>

    </div>
  );
}


export default Cotizacion;