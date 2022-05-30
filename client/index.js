//entry point for webpack bundle file

import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './src/App.jsx';
import './styles/index.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);