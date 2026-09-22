export const Navbar = ({ pieza, alReservar ,contadorReservas}) => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <h2>Hotel Saturno</h2>
      <p>Reservas activas: {contadorReservas}</p>
    </nav>
  );
};