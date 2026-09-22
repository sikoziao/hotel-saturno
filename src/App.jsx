
import React from "react";
import { Navbar } from "./componentes/Navbar.jsx";


import { ListaPieza } from "./componentes/ListaPieza.jsx";
import { PiezaDetalles } from "./componentes/PiezaDetalles.jsx";
import { hotelData } from "./hotelData.js";

function App() {
  const [selectedPieza, setSelectedPieza] = React.useState(null);

  const [reservas, setReservas] = React.useState(0);
  return (
    <div>
      <Navbar contadorReservas={reservas} />
      
      <ListaPieza piezas={hotelData}
      alSelecionar={setSelectedPieza} />

      <PiezaDetalles
      pieza={selectedPieza}
      alReservar={() => setReservas(reservas + 1)}
       />
    </div>
  );
}

export default App;