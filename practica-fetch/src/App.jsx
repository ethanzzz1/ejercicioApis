import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (e) {
        setError('Error al cargar los personajes');
      }
    };
    fetchCharacters();
  }, []);
  return (
<div className="container">
<h1>Personajes de Rick and Morty</h1>
      {error && <p>{error}</p>}
<div className="results">
        {characters.map((character) => (
<div className="card" key={character.id}>
<img src={character.image} alt={character.name} />
<h3>{character.name}</h3>
<p><strong>Estado:</strong> {character.status}</p>
<p><strong>Especie:</strong> {character.species}</p>
<p><strong>Origen:</strong> {character.origin.name}</p>
</div>
        ))}
</div>
</div>
  );
}

export default  App;