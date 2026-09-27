export const CartaPieza = ({ infoPieza, alSeleccionar }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
     
      <img 
        src={infoPieza.imagen} 
        alt={infoPieza.nombre} 
        className="w-full h-36 object-cover rounded-t-lg"
      />
     
     
     
    <h3 className="text-xl font-bold text-gray-800 mb-1">{infoPieza.nombre}</h3>
     <p className="text-gray-600 text-sm mb-3">

      
      <span className="font-semibold text-gray-800">Categoría:</span> {infoPieza.categoria}
      </p>

      <p className="text-blue-600 font-bold text-lg mb-4">
      ${infoPieza.precio} CLP<span className="text-sm font-normal text-gray-500"> por noche</span>
      </p>
      
      <button onClick={() => alSeleccionar(infoPieza)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Ver detalles
      </button>



    </div>
  );
};