export const CartaPieza = ({ infoPieza, alSeleccionar }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px', width: '250px' }}>
     
      <img 
        src={infoPieza.imagen} 
        alt={infoPieza.nombre} 
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} 
      />
     
     
     
    <h3>{infoPieza.nombre}</h3>
      <p><strong>Categoría:</strong> {infoPieza.categoria}</p>
      <p>${infoPieza.precio} CLP por noche</p>
      
      <button onClick={() => alSeleccionar(infoPieza)}>Ver detalles</button>



    </div>
  );
};