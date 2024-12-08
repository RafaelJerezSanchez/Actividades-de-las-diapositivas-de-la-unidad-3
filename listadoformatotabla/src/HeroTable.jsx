import React from 'react';
import './HeroTable.css';
import json2 from './heroes.json';

export const HeroTable = ({ publisher }) => {

  const heroes = json2.filter((heroe) => heroe.publisher === publisher);

  if (heroes.length === 0) {
    return <p>No hay héroes disponibles para el publisher "{publisher}".</p>;
  }

  return (
    <table className="hero-table">
      <thead>
        <tr>
          <th>Superhéroe</th>
          <th>Alter Ego</th>
          <th>Primera Aparición</th>
          <th>Personajes</th>
        </tr>
      </thead>
      <tbody>
        {heroes.map((heroe, index) => (
          <tr key={index}>
            <td>{heroe.superhero}</td>
            <td>{heroe.alter_ego}</td>
            <td>{heroe.first_appearance}</td>
            <td>{heroe.characters}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
