const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Get all todos
app.get('/todos', async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
  console.log('Todos retrieved');
  console.table(todos);
});

// Create a new todo
app.post('/todos', async (req, res) => {
  const { text, completed, userId } = req.body;
  const todo = await prisma.todo.create({
    data: {
      text,
      completed,
      userId,
    },
  });
  res.json(todo);
  console.log('Todo created' + todo.id);
});

// Update a todo
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  const todo = await prisma.todo.update({
    where: { id: parseInt(id) },
    data: { text, completed },
  });
  res.json(todo);
  console.log('Todo updated' + todo.id);
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.todo.delete({
    where: { id: parseInt(id) },
  });
  res.sendStatus(204);
  console.log('Todo deleted' + id);
});

// Register a new user
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  res.json(user);
  console.log('User created' + user.email);
});

// Login a user
app.post('/login', async (req, res) => {
  // Get the email and password from the request body
  const { email, password } = req.body;

  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Compare the passwords
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  res.json(user);
  console.log('User logged in' + user.email);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});