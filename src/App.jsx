import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Housing from './pages/Housing/Housing';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> 
      </div>
    <main> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/logement/:id" element={<Housing />} />
           {/* On définit explicitement la route 404 pour le Navigate de Logement.jsx */}
        <Route path="/404" element={<Error />} />
           {/* Cette route attrape tout le reste */}
        <Route path="*" element={<Error />} />
      </Routes>
    </main> 

    <Footer />
    </Router>
  );
}

export default App;