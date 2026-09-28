export const Navbar = ({ pieza, alReservar ,contadorReservas}) => {
  return (
    <nav className="bg-amber-500 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">Hotel Saturno</h1>
     
     
     
     
 <div className="bg-amber-600/50 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
        <span>Reservas activas:</span>
        <span className="bg-gray-900 text-amber-400 px-2 py-1 rounded-md text-sm font-bold">
          {contadorReservas}
        </span>
      </div>
    
    
    
    
    </nav>
  );
};