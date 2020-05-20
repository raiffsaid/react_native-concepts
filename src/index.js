import React from 'react';
import { render } from 'react-dom';

import App from './App'; // Importando o componente App

// Abre a tag e fecha nela mesma ao chamar um componente
render(<App />, document.getElementById('app')); 