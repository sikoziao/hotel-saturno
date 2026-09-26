
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
    <div>
      <Navbar contadorReservas={reservas} />

      <div style={{ padding: "1rem 2rem", backgroundColor: "#f4f4f4" }}>
        <input
          type="text"
          placeholder="buscar por nombre o categoria..."
          value={busqueda}
          onChange={(e) => setbusqueda(e.target.value)}
          style={{
            width: "100%",
            padding: "0.8rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
        />
      </div>

      <ListaPieza 
        piezas={piezasFiltradas} 
        alSeleccionar={setSelectedPieza} 
      />

      <PiezaDetalles
        pieza={selectedPieza}
        alReservar={() => setReservas(reservas + 1)}
      />
    </div>
  );
}

export default App;