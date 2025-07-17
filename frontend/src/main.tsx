import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<header class="header-safe"></header>
    <App />
	<footer class="footer-safe">Footer</footer>
  </StrictMode>
);