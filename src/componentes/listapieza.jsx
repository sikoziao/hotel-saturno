import { CartaPieza } from './cartapieza.jsx';

export const ListaPieza = ({ piezas , alSeleccionar
}) => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        Nuestras Piezas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {piezas.map((pieza) => (
          
          <CartaPieza key={pieza.id} infoPieza={pieza}
          alSeleccionar={alSeleccionar} />
        ))}
      </div>
    </div>
  );
};