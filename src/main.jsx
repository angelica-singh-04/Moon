import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App from './Apps/App';
import Gallery from './Apps/GalleryPage/GalleryPage';
import FinalUpload from './components/Gallery/Upload/FinalUpload';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upload" element={<FinalUpload />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
