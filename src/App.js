import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Footer from './pages/layouts/Footer';
import { AuthProvider } from './context/AuthContext';  // Correct import for AuthProvider
import MainMenu from "./pages/layouts/menus/MainMenu";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Wrap your app layout */}
        <MainMenu /> {/* Moved outside of Routes for consistency across all pages */}
        <div className="App">
          <Routes>
            <Route path="/" element={<><Home /><Footer /></>} />
            <Route path="/home" element={<><Home /><Footer /></>} />
            <Route path="/login" element={<><Login /><Footer /></>} />
            <Route path="/register" element={<><Register /><Footer /></>} />
            <Route path="/logout" element={<><Logout /><Footer /></>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
