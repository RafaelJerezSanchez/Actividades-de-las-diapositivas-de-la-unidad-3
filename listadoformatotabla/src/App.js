import React, { useState } from 'react';
import { HeroTable } from './HeroTable';

export const App = () => {
  const [publisher, setPublisher] = useState('');

  return (
    <div>
      <h1>Listado de Héroes</h1>
      <div>
        <button onClick={() => setPublisher('DC Comics')}>DC Comics</button>
        <button onClick={() => setPublisher('Marvel Comics')}>Marvel Comics</button>
        <button onClick={() => setPublisher('')}>Ocultar Tabla</button>
      </div>
      {publisher && <HeroTable publisher={publisher} />}
    </div>
  );
};
