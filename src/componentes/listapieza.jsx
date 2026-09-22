import { CartaPieza } from './CartaPieza';

export const ListaPieza = ({ piezas 
}) => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Nuestras Piezas</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {piezas.map((pieza) => (
          
          <CartaPieza key={pieza.id} infoPieza={pieza} />
        ))}
      </div>
    </div>
  );
};