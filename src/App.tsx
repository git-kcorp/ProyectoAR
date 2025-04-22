import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import OrdenDetalle from './Pages/OrdenDetalle';
import OrdenMonitoreo from './Pages/OrdenMonitoreo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orden/:id" element={<OrdenDetalle />} />
        <Route path="/ordenMonitoreo/" element={<OrdenMonitoreo />} />
      </Routes>
    </Router>
  );
}

export default App;
