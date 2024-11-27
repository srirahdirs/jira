import './assets/css/App.css';
import 'primereact/resources/themes/lara-light-blue/theme.css'; // Or choose another theme
import 'primereact/resources/primereact.min.css'; // Core CSS of PrimeReact
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Header from './pages/layouts/Header';
import Content from './pages/Content';
import Footer from './pages/layouts/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Conditionally render Header based on route */}
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Login page doesn't render Header */}
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
