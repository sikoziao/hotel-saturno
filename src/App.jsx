
import React from "react";
import { Navbar } from "./componentes/navbar.jsx";
import { ListaPieza } from "./componentes/listapieza.jsx";
import { PiezaDetalles } from "./componentes/PiezaDetalles.jsx";
import { hotelData } from "./hotelData.js";

function App() {
  const [selectedPieza, setSelectedPieza] = React.useState(null);
  const [reservas, setReservas] = React.useState(0);
  const [busqueda, setbusqueda] = React.useState("");

  const piezasFiltradas = hotelData.filter((pieza) =>
    pieza.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    pieza.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-12" >
      <Navbar contadorReservas={reservas} />

      <div className="bg-gray-200 py-6 px-6 shadow-inner">
        <div className="max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="buscar por nombre o categoria..."
          value={busqueda}
          onChange={(e) => setbusqueda(e.target.value)}
          className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 text-lg transition-all"
          
        />
      </div>
      </div>

      <ListaPieza 
        piezas={piezasFiltradas} 
        alSeleccionar={setSelectedPieza} 
      />

      <PiezaDetalles
        pieza={selectedPieza}
        alReservar={() => setReservas(reservas + 1)}
        alCerrar={() => setSelectedPieza(null)}
      />
    </div>
  );
}

export default App;