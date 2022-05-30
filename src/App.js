import { useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './components/HomePage';
import { AdminPage } from './components/AdminPage';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="admin" element={<AdminPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
