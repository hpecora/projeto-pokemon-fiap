'use client';

import Favorito from '..//components/Favorito';
import '..//global.css';

export default function FavoritesPage() {
    return (
        <div className="container">
            <h1>Seus Favoritos</h1>
            <Favorito />
        </div>
    )
}