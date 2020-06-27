import express from 'express';

const app = express();

app.get('/users', (request, response) =>{
    console.log('Listagem de usuários');

    // Rota: Endereço completo da requisição
    // Recurso: Qual entidade estamos acessando do sistema

    //  GET: Buscar uma ou mais informações no back-end
    //  POST: Criar uma nova informação no back-end
    //  PUT: Atualizar uma informação existente no back-end
    //  DELETE: Remover uma informação do back-end

    //  POST http://localhost:3333/users = criar um usuário
    //  GET http://localhost:3333/users = Listar usuários
    //  GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

    response.json(
        [
            'Diego',
            'Cleiton',
            'Robinson',
            'Daniel'
        ]
    );
})

app.post('/users', (request, response) =>{
    const user = {
        name: 'Diego',
        email: 'diego@rocketseat.com.br'
    }
    return response.json(user);
})

app.listen(3333);