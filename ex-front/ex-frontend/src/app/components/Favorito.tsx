'use client';

import { useEffect, useState } from 'react';
import { Favorite } from '../types';
import '..//global.css';

export default function Favorito() {
    const [favorites, setFavorites] = useState<Favorite[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    const removeFavorite = (id: string) => {
        const updatedFavorites = favorites.filter((fav) => fav.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    if (favorites.length === 0) {
        return <p>Nenhuma carta foi favoritada ainda.</p>;
    }

    return (
        <div>
            <h1>Cartas Favoritas</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {favorites.map((card) => (
                    <div key={card.id} style={{ border: '1px solid #ddd', padding: '10px' }}>
                        <img src={card.images.small} alt={card.name} />
                        <h3>{card.name}</h3>
                        <p>HP: {card.hp}</p>
                        <p>Tipos: {card.types.join(', ')}</p>
                        <button onClick={() => removeFavorite(card.id)}>Remover</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
