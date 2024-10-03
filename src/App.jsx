import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Chalet } from './pages/Chalets';
import { ErrorPage } from './first_components/Error/Error';
import { Regions } from './pages/Regions';
import { Castles } from './pages/Castles';
import './styles/app.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Regions" element={<Regions />} />
        <Route path="/Chalet/:id" element={<Chalet />} />
        <Route path="/Castles" element={<Castles />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
