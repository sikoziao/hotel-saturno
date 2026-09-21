import { Navbar } from './componentes/navbar';
import { ListaPieza } from './componentes/listapieza';
import { PiezaDetalle } from './componentes/piezadetalle';
import { hotelData } from './hotelData';

function App() {
  console.log("Datos del hotel cargados:", hotelData);

  return (
    <div>
      <Navbar />
      <ListaPieza />
      <PiezaDetalle />
    </div>
  );
}

export default App;