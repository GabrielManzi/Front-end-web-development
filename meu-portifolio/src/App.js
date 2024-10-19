// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Videos from './components/Videos';
import Apresentacoes from './components/Apresentacoes';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Meu Portfólio</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Início</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projetos">Projetos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/videos">Vídeos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/apresentacoes">Apresentações</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Conteúdo */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/apresentacoes" element={<Apresentacoes />} />
          </Routes>
        </div>

        {/* Rodapé */}
        <footer className="bg-dark text-white text-center py-3 mt-4">
          <div className="container">
            <p>&copy; 2024, Gabriel Manzi. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
