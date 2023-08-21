import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "./index.scss"
import FilmeDestaque from './components/filmeDestaque/filmeDestaque';
import apiCategorias from './components/api/apiCategorias';
import Categorias from './components/categorias/categorias';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilmeDestaque/>
    {apiCategorias.map((apiCategorias) => {
      return (
        <
          Categorias  
            key={apiCategorias.name}
            title={apiCategorias.title}
            path={apiCategorias.path}
        />
      )
    })}
  </React.StrictMode>
);

reportWebVitals();
