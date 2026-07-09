import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SmoothScrollProvider } from './context/SmoothScrollContext';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <SmoothScrollProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SmoothScrollProvider>
  );
}
