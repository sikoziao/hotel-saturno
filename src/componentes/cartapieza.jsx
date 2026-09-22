export const CartaPieza = ({ infoPieza, alSeleccionar }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px', width: '250px' }}>
     
     
     
     
    <h3>{infoPieza.nombre}</h3>
      <p><strong>Categoría:</strong> {infoPieza.categoria}</p>
      <p>${infoPieza.precio} CLP por noche</p>
      
      <button onClick={() => alSeleccionar(infoPieza)}>Ver detalles</button>



    </div>
  );
};