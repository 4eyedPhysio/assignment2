const express = require('express');
const routes = express.Router();

let data = [
  {
    id: 1,
    name: "Michael"
  },
  {
    id: 2,
    name: "Chinua Achebe"
  }
];

routes.get('/', (req, res) => {
  res.json(data);
});

routes.put('/', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.json({ message: 'Data added successfully' });
});

routes.delete('/', (req, res) => {
  data = [];
  res.json({ message: 'All data deleted successfully' });
});

routes.get('/author/:name', (req, res) => {
  const authorName = req.params.name;
  const authorData = data.filter(item => item.name === authorName);
  res.json(authorData);
});

routes.post('/author/:name', (req, res) => {
  const authorName = req.params.name;
  const newData = { id: data.length + 1, name: authorName };
  data.push(newData);
  res.json({ message: 'Data added successfully' });
});

routes.put('/books/author/:id', (req, res) => {
  const authorID = parseInt(req.params.id);
  const newData = req.body;
  data.forEach((item) => {
    if (item.id === authorID) {
      item.name = newData.name;
    }
  });
  res.json({ message: 'Data updated successfully' });
});

module.exports = routes;
