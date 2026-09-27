import React, {useState} from "react";
export const PiezaDetalles = ({pieza , alReservar,alCerrar}) => {
  const [noches , setNoches] = useState(1);
  const [reservado, setReservado] = useState(false);  

  const handleConfirmar = () => {
    alReservar();
    setReservado(true);

  };
  const handleCancelar = () => {
    setReservado(false);
    setNoches(1);
    if (alCerrar) alCerrar;
  }

  if (!pieza) 
    {return (
      <div style={{ padding: '2rem', border: '2px dashed #666', marginTop: '2rem' }}>
        <h2>Selecciona una habitación para ver sus detalles</h2>
      </div>
    );
  }



  return (
    <div   style={{ padding: '2rem', border: '2px dashed #666', marginTop: '2rem' }}>
      <h2>Detalle: {pieza.nombre}</h2>
      <p>{pieza.descripcion}</p>
      <p><strong>Precio:</strong> ${pieza.precio} CLP por noche</p>
      
      {!reservado ? (
        <>
        <div style={{margin : '1rem 0'}}>
          <label><strong>Noches por estadia: </strong></label>

          <button
           onClick = {() => setNoches(Math.max(1, noches -1))}
            style={{padding : '0.2rem 0.6rem', cursor: 'pointer' }}
              >
               -
              </button>
              <span style ={{margin: '0 10px', fontWeight: 'bold' }}>{noches} </span>
              <button
                onClick={() => setNoches(noches + 1)}
                style= {{padding: '0.2rem 0.6rem', cursor: 'pointer' }}>
                  +
              </button>
              </div>

              <p><strong>Total estimado: </strong>${pieza.precio * noches} CLP</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
            <button 
              onClick={handleConfirmar} 
              style={{ padding: '0.5rem 1rem', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              Confirmar Reerva
            </button>
            <button 
              onClick={handleCancelar} 
              style={{ padding: '0.5rem 1rem', backgroundColor: '#d9534f', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              Cancelar
            </button>
          </div>
        </>
      ) : (
        <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#e8f5e9', border: '1px solid #4caf50', borderRadius: '4px' }}>
          <h3 style={{ color: 'green', marginTop: 0 }}>!reservamos con exito¡</h3>
          <p>Nos contactaremos contigo enseguida para finalizar los detalles de tu estadia </p>
          <button 
            onClick={handleCancelar} 
            style={{ padding: '0.5rem 1rem', backgroundColor: '#333', color: 'white', border: 'none', cursor: 'pointer' }}
          >
          
          Aceptar

          </button>
        </div>
      )}
    </div>
  );
  };
