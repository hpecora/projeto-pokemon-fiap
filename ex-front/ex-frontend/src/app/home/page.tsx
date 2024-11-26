
'use client';

import { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import { fetchCards } from '../services/api';
import { Favorite } from '../types/index';
import '..//global.css';

export default function Home() {
    const [cards, setCards] = useState<Favorite[]>([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadCards = async () => {
            const query = search ? `name:${search}` : ''; 
            const data = await fetchCards(query, page, 10);
            console.log('Cartas carregadas:', data.data); // Verifica os dados recebidos
            setCards(data.data || []);
        };
        loadCards();
    }, [search, page]);

    return (
        <div className="container">
            <h1>Cartas de Pokémon</h1>
            <input
                type="text"
                placeholder="Buscar por nome"
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <CardList cards={cards} /> {/* Renderiza o componente CardList */}
            <div className="pagination">
                <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Anterior</button>
                <button onClick={() => setPage((prev) => prev + 1)}>Próxima</button>
            </div>
        </div>
    );
}