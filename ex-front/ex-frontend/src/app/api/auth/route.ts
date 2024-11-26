import { NextResponse } from 'next/server';

const users = [
    {
        username: 'Hpecora', // Usuário padrão
        password: '237699', // Senha padrão
    },
];

export async function POST(request: Request) {
    const body = await request.json();

    console.log('Dados recebidos no backend:', body); 

    const { username, password } = body;

 
    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        console.log('Usuário autenticado:', user);
        return NextResponse.json({ message: 'Autenticado com sucesso!' });
    }

    console.log('Autenticação falhou para:', username);
    return NextResponse.json(
        { error: 'Usuário ou senha inválidos.' },
        { status: 401 }
    );
}
