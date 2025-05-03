# Desafio: Lista de Tarefas com Express.js

Este é um desafio prático para construir uma API REST de lista de tarefas (to-do list) utilizando Node.js com o framework Express.

## 📋 Requisitos

Implemente as seguintes rotas na API:

### ✅ Criar uma tarefa
- `POST /tasks`
- Body: `{ "title": "string", "description": "string" }`

### 📄 Listar todas as tarefas
- `GET /tasks`

### 🔍 Buscar tarefas por título ou descrição
- `GET /tasks?search=palavra-chave`

### ✏️ Atualizar uma tarefa
- `PUT /tasks/:id`
- Body: `{ "title": "string", "description": "string" }`

### ✔️ Marcar uma tarefa como concluída
- `PATCH /tasks/:id/complete`

### ❌ Deletar uma tarefa
- `DELETE /tasks/:id`

## 🧠 O que será avaliado

- Estrutura do código e organização dos arquivos
- Boas práticas com Express.js
- Uso correto dos verbos HTTP
- Respostas apropriadas (status codes e mensagens)
- Validações básicas de entrada (ex: título obrigatório)
- Armazenamento em memória (não usar banco de dados)
- Documentação no README

## 🚀 Para rodar o projeto

```bash
npm install
npm run dev
```

## 🛠 Tecnologias

- Node.js
- Express
- Nodemon (para desenvolvimento)

---

Desafio proposto como exercício para praticar conceitos de API REST com Node.js.
