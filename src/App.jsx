import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
        
        <main> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Housing />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main> 

        <Footer />
      </div>
    </Router>
  );
}

export default App;