import { CartaPieza } from './cartapieza.jsx';

export const ListaPieza = ({ piezas , alSeleccionar
}) => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Nuestras Piezas</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {piezas.map((pieza) => (
          
          <CartaPieza key={pieza.id} infoPieza={pieza}
          alSeleccionar={alSeleccionar} />
        ))}
      </div>
    </div>
  );
};