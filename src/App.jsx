import { Navbar } from "./componentes/Navbar.jsx";
import { ListaPieza } from "./componentes/ListaPieza.jsx";
import { PiezaDetalles } from "./componentes/PiezaDetalles.jsx";
import { hotelData } from "./hotelData.js";

function App() {
  return (
    <div>
      <Navbar />
      
      <ListaPieza piezas={hotelData} />
      <PiezaDetalles />
    </div>
  );
}

export default App;