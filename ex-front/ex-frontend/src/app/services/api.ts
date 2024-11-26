import { Favorite } from '..//types/index';

const BASE_URL = 'https://api.pokemontcg.io/v2/cards';

export const fetchCards = async (query: string = '', page: number = 1, pageSize: number = 10) => {
    try {
        const url = `${BASE_URL}?q=${query}&orderBy=number,name&page=${page}&pageSize=${pageSize}`;
        console.log('URL da Requisição:', url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Dados retornados:', data);

        return data;
    } catch (error) {
        console.error('Erro ao buscar cartas:', error);
        return { data: [] };
    }
};
