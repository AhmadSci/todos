# React Native Todo App

Todo app using Node and express for the backend, React native for the frontend

## Prerequisites

- Node.js
- PostgreSQL
- Prisma
- React Native CLI

## Installation

1. `git clone https://github.com/AhmadSci/todos`
2. `cd todos`
3. `npm install` to install the dependencies.
4. `cd todo-backend`
5. `npm install nodemon -g`
6. `nodemon index.js` to start the server
7. `cd..`
8. `cd todo-app`
9. `npx prisma migrate dev` to create the database schema.
10. `npm start` to start the server.

## API Endpoints

The API endpoints for this app are as follows:

### GET /todos

Retrieves all todos.

### POST /todos

Creates a new todo.

Required request body parameters:

- `text` (string)
- `completed` (boolean)
- `userId` (number)

### PUT /todos/:id

Updates a todo.

Required request parameters:

- `id` (number)

Required request body parameters:

- `text` (string)
- `completed` (boolean)

### DELETE /todos/:id

Deletes a todo.

Required request parameters:

- `id` (number)

### POST /register

Registers a new user.

Required request body parameters:

- `email` (string)
- `password` (string)

### POST /login

Logs in a user.

Required request body parameters:

- `email` (string)
- `password` (string)

## Technologies Used

- React Native
- Prisma
- Node.js
- Express
- PostgreSQL
- bcrypt