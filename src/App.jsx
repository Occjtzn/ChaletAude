import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './secondary_components/ScrollToTop/ScrollToTop';
import { Home } from './pages/Home';
import { Chalet } from './pages/Chalets';
import { ErrorPage } from './first_components/Error/Error';
import { Regions } from './pages/Regions';
import { Castles } from './pages/Castles';
import { Mountains } from './pages/Mountains';
import { Contact } from './pages/Contact';
import { Abbayes } from './pages/Abbayes';
import { Eaux } from './pages/Eaux';
import { Mer } from './pages/Mer';
import './styles/app.scss';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Regions" element={<Regions />} />
        <Route path="/Chalet/:id" element={<Chalet />} />
        <Route path="/Castles" element={<Castles />} />
        <Route path="/Castles/:id" element={<Castles />} />
        <Route path="/Mountains" element={<Mountains />} />
        <Route path="/Abbayes" element={<Abbayes />} />
        <Route path="/Eaux" element={<Eaux />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mer" element={<Mer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
