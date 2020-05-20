import React from 'react';

/**
 * Para usar JS dentro do HTML, basta usar {} envolta da variável
 * A variável children é nativa do ReactJS, ela busca
 * os elementos inseridos dentro das tags
 * */ 
export default function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1> 
    </header>
  );
}