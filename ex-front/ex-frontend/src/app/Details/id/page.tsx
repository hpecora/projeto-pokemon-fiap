'use client';

import '..//global.css';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchCards } from '@/app/services/api';
import { Favorite } from '@/app/types/index';

export default function DetailsPage() {
    const params = useParams();
    const id = typeof params.id === 'string' ? params.id : undefined;
    const [card, setCard] = useState<Favorite | null>(null);

    useEffect(() => {
        const loadCardDetails = async () => {
            if (id) {
                const data = await fetchCards(id);
                setCard(data.data || null);
            }
        };
        loadCardDetails();
    }, [id]);

    if (!id) {
        return <p className="error-message">ID inválido ou não fornecido.</p>;
    }

    if (!card) {
        return <p className="loading-message">Carregando detalhes...</p>;
    }

    return (
        <div className="container">
            <h1>Detalhes da Carta</h1>
            <div className="card-details">
                <img src={card.images.small} alt={card.name} />
                <p><strong>Nome:</strong> {card.name}</p>
                <p><strong>HP:</strong> {card.hp}</p>
                <p><strong>Tipos:</strong> {card.types.join(', ')}</p>
            </div>
        </div>
    );
}
