// todo: {id: number, title: string, completed: boolean}
const db = require("./database")
const express = require("express");
const server = express ();

server.use(express.json());

server.get("/", (_request, reponse) => {
    reponse.status(200).json({ message: "Olá mundo!"});
});

// Listar todos:   GET http://localhost:3001/tasks
server.get("/tasks", async (_request, response) => {
    const tasks = await db.list();
    response.status(200).json(tasks);
});

//Route param's
// Buscar um:       GET: http://localhost:3001/tasks/3
server.get("/tasks/:id", async (request, reponse) => {
    const id = request.params.id;
    const task = await db.get(id);

    reponse.status(200).json(task);
});

// Criar novo:       Post: http://localhost:3001/tasks
server.post("/tasks", async (request, response) => {
    const newTask = request.body;
    const taskCreated = await db.insert(newTask);

    response.status(201).json(taskCreated);
});

// Atualizar o titulo de uma tarefa:    PUT: http://localhost:3001/tasks/:id
server.put("/tasks/:id", async (request , response) => {
    const newUpdate = request.title;
    const taskUpdate = await db.update(newUpdate)

    response.status(200).json(taskUpdate);
})

// Mudar o valor de completed:          PUT: http://localhost:3001/tasks/:id/completed


// Excluir uma tarefa:                  Delete: http://localhost:3001/tasks/:id

server.listen("3001", () => console.log("Servidor está rodando!"));