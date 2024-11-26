'use client';

import '..//global.css';
import { Favorite } from '../types';
import Card from './Card'; 
import { useState } from 'react';

type CardListProps = {
    cards: Favorite[];
};

export default function CardList({ cards }: CardListProps) {
    const [favorites, setFavorites] = useState<string[]>([]);

    const toggleFavorite = (id: string) => {
        if (favorites.includes(id)) {
            
            setFavorites(favorites.filter((favId) => favId !== id));
        } else {
            
            setFavorites([...favorites, id]);
        }
    };

    return (
        <div className="card-grid">
            {cards.map((card) => (
                <div key={card.id} className="card">
                    <img src={card.images.small} alt={card.name} />
                    <h3>{card.name}</h3>
                    <p><strong>HP:</strong> {card.hp}</p>
                    <p><strong>Tipos:</strong> {card.types.join(', ')}</p>
                    <button onClick={() => toggleFavorite(card.id)}>
                        {favorites.includes(card.id) ? 'Desfavoritar' : 'Favoritar'}
                    </button>
                    {/* Estrela Dourada */}
                    {favorites.includes(card.id) && (
                        <span className="favorite-star">⭐</span>
                    )}
                </div>
            ))}
        </div>
    );
}

