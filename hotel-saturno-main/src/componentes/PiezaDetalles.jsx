export const PiezaDetalles = ({pieza , alReservar}) => {
  if (!pieza) {return (
      <div style={{ padding: '2rem', border: '2px dashed #666', marginTop: '2rem' }}>
        <h2>Selecciona una habitación para ver sus detalles</h2>
      </div>
    );
  }




  return (
    <div style={{ padding: '2rem', border: '2px dashed #666', marginTop: '2rem' }}>
      <h2>Detalle: {pieza.nombre}</h2>
      <p>{pieza.descripcion}</p>
      <p><strong>Precio:</strong> ${pieza.precio} CLP por noche</p>


<button 
        onClick={alReservar} 
        style={{ padding: '0.5rem 1rem', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Confirmar Reserva
      </button>

    </div>
  );
};