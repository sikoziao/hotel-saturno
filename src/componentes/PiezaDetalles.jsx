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
    if (alCerrar) alCerrar();
  }

  if (!pieza) 
    {return (
      <div className="max-w-2xl mx-auto mt-8 p-8 border-2 border-dashed border-gray-400 rounded-lg text-center text-gray-500">
        <h2 className="text-lg font-semibold">Selecciona una habitación para ver sus detalles</h2>
      </div>
    );
  }



  return (
    <div  className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Detalle: {pieza.nombre}</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">{pieza.descripcion}</p>
      <p className="text-gray-800 mb-4">
      <span className="font-bold">Precio:</span> ${pieza.precio} CLP <span className="text-sm text-gray-500">por noche</span>
      </p>
      {!reservado ? (
        <>
        <div className="flex items-center gap-4 my-6 bg-gray-50 p-4 rounded-md">
          <label className="font-bold text-gray-700">Noches por estadía:</label>
        <div className="flex items-center gap-3"></div>
          <button
           onClick = {() => setNoches(Math.max(1, noches -1))}
           className="w-8 h-8 flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded transition-colors cursor-pointer"
              >
               -
              </button>
              <span className="font-bold text-lg w-4 text-center">{noches} </span>
              <button
                onClick={() => setNoches(noches + 1)}
                className="w-8 h-8 flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded transition-colors cursor-pointer"
              >
                  +
              </button>
              </div>

              <p><strong>Total estimado: </strong>${pieza.precio * noches} CLP</p>
              <div className="flex gap-4 mt-6">
            <button 
              onClick={handleConfirmar} 
              className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors cursor-pointer"
            >
              Confirmar Reserva
            </button>
            <button 
              onClick={handleCancelar} 
              className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        </>
      ) : (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-md">
          <h3 className="text-green-800 font-bold mb-2">¡reservamos con exito!</h3>
          <p className="text-green-700">Nos contactaremos contigo enseguida para finalizar los detalles de tu estadia </p>
          <button 
            onClick={handleCancelar} 
            className="px-4 py-2 bg-gray-300 text-gray-800 font-bold rounded-md hover:bg-gray-400 transition-colors cursor-pointer"
          >
          
          Aceptar

          </button>
        </div>
      )}
    </div>
  );
  };
