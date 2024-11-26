'use client';
import '..//global.css';

type CardProps = {
    id: string;
    name: string;
    image: string;
    hp: string;
    types: string[];
    onFavorite: (id: string) => void;
};

export default function Card({ id, name, image, hp, types, onFavorite }: CardProps) {
    return (
        <div className="card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p><strong>HP:</strong> {hp}</p>
        <p><strong>Tipos:</strong> {types.join(', ')}</p>
        <button onClick={() => onFavorite(id)}>Favoritar</button>
    </div>
    );
}
