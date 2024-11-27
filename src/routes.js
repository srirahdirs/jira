import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} /> {/* Use element prop instead of component */}
    <Route path="/login" element={<Login />} /> {/* Use element prop instead of component */}
    <Route path="*" element={<NotFound />} /> {/* For unmatched routes */}
  </Routes>
);

export default AppRoutes;
