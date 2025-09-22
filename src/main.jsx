import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App from './Apps/App';
import Gallery from './Apps/GalleryPage/GalleryPage';
import Nasaimg from "@/components/Gallery/NASA/Nasa-img";
import FinalUpload from './components/Gallery/Upload/FinalUpload';
import Navbar from '@/components/Navbar/Navbar';
import Newsupdates from '@/components/News&Updates/News-Updates/News';
import Tools from "@/components/News&Updates/Tools/Tools";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="h-16" />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upload" element={<FinalUpload />} />
        <Route path="/images" element={<Nasaimg />} />
        <Route path="/news&updates" element={<Newsupdates />} />
                <Route path="/tools" element={<Tools />} />

        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
