> **_NOTE:_**  The app should in theory work, but i keep getting a `[TypeError: Network request failed]` even when using axios instead of fetch, i have no idea why. \
The backend works fine though, tested using postman.

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
9. Change the `[name]` and `[pass]` in the [.env](./todo-backend/.env) file with your postreSQL credentials
9. `npx prisma migrate dev` to create the database schema.
10. `npm start` to start the server.

## API Endpoints

The API endpoints for this app are as follows:

| Method | Endpoint         | Description                               | Required Request Parameters | Required Request Body Parameters |
|--------|-----------------|-------------------------------------------|-----------------------------|---------------------------------|
| GET    | `/todos`        | Retrieves all todos.                      | -                           | -                               |
| POST   | `/todos`        | Creates a new todo.                       | -                           | `text` (string), `completed` (boolean), `userId` (number) |
| PUT    | `/todos/:id`    | Updates a todo.                           | `id` (number)               | `text` (string), `completed` (boolean) |
| DELETE | `/todos/:id`    | Deletes a todo.                           | `id` (number)               | -                               |
| POST   | `/register`    | Registers a new user.                     | -                           | `email` (string), `password` (string) |
| POST   | `/login`        | Logs in a user.                           | -                           | `email` (string), `password` (string) |

## Technologies Used

- React Native
- Prisma
- Node.js
- Express
- PostgreSQL
- bcrypt