import express from 'express';

const app = express();

app.use(express.json());

const users = [
    'Diego',
    'Cleiton',
    'Robinson',
    'Daniel'
];

// Rota: Endereço completo da requisição
    // Recurso: Qual entidade estamos acessando do sistema

    //  GET: Buscar uma ou mais informações no back-end
    //  POST: Criar uma nova informação no back-end
    //  PUT: Atualizar uma informação existente no back-end
    //  DELETE: Remover uma informação do back-end

    //  POST http://localhost:3333/users = criar um usuário
    //  GET http://localhost:3333/users = Listar usuários
    //  GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

    // TIPOS DE PARAMETROS

    // Request Param: Parâmetros que vem na própria rota que identificam um recurso
    // Query Param: Parâmetros que vem na própria rota geralmente opionais para filtros e paginações
    // Request Body: Parâmetros para criação/atualização  de informações

app.get('/users', (request, response) =>{
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
})

app.get('/users/:id', (request, response) =>{
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) =>{
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    }
    return response.json(user);
})

app.listen(3333);