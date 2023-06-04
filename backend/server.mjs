import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define the Todo schema
const todoSchema = new mongoose.Schema({
  id: Number,
  todo: String,
  completed: Boolean,
  userId: Number
});

// Create the Todo model
const Todo = mongoose.model('Todo', todoSchema);

app.get('/', (req, res) => {
  res.send('<h1>Hello From Server...</h1>');
});

// Create a new Todo
app.post('/api/todos', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Todos
app.get('/api/todos', async (req, res) => {
  try {
    //TODO: if todos res with todos if not fetch from external api then save it and send it back
    const todos = await Todo.find();
    console.log('todos from mongo =======>>>>>>>> ', todos)
    if(!todos.length){
      console.log('hey inside if ===========>>>>>>>>>>>########### ')
      try {
        debugger
        // Assuming you have an API endpoint to fetch todos
        const response = await fetch('https://dummyjson.com/todos');
        console.log('response hey ========>>>>>>> ', response)
        const data = await response.json();
        console.log('data hey ========>>>>>>> ', data)
        if(data && data?.todos){
          // const todos = new Todo(data?.todos);
          // await todos.save();
          await Todo.insertMany(data?.todos)
          res.json(todos);
        }
      } catch (error) {
        //res error
        console.error('Error fetching external todos: ', error);
        res.status(500).json(error)
      }
    }
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single Todo by ID
app.get('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findOne({ id: req.params.id });
    if (!todo) throw Error('Todo not found');
    res.json(todo);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Update a Todo by ID
app.put('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!todo) throw Error('Todo not found');
    res.json(todo);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Delete a Todo by ID
app.delete('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ id: req.params.id });
    if (!todo) throw Error('Todo not found');
    res.sendStatus(204);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
