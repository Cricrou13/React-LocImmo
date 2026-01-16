import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ici on dit : si l'URL est "/", affiche le composant Home */}
        <Route path="/" element={<Home />} />
        
        {/* On ajoutera les autres routes plus tard (About, 404, etc.) */}
      </Routes>
    </Router>
  );
}

export default App;