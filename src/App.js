import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ColorSchemesExample from './Componentes/Menu';
import Contacto from './Componentes/Contacto';
import Convocatoria from './Componentes/Convocatoria';
import ControlEscolar from './Componentes/ControlEscolar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorSchemesExample />       
          <div>
            <Routes>
              <Route path='/contacto' element={<Contacto />}></Route>
              <Route path='/convocatoria' element={<Convocatoria />}></Route>
              <Route path='/ControlEscolar' element={<ControlEscolar />}></Route>
            </Routes>
          </div>
      </BrowserRouter>
   </div>
  );
}


export default App;
