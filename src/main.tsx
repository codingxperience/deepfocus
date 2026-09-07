import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoot from './App';
import './styles/global.css';
import './styles/states.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>
);
