import { CartaPieza } from './cartapieza';

export const ListaPieza = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Nuestras Piezas</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <CartaPieza />
        <CartaPieza />
        <CartaPieza />
      </div>
    </div>
  );
};