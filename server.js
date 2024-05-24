const express = require('express');
const app = express();

// Rota que retorna um código de status 200 OK
app.get('/ok', (req, res) => {
  res.status(200).send('Requisição bem-sucedida!');
});

// Rota que retorna um código de status 201 Created
app.post('/created', (req, res) => {
  // Lógica para criar um novo recurso
  res.status(201).send('Recurso criado com sucesso!');
});

// Rota que retorna um código de status 400 Bad Request
app.get('/bad-request', (req, res) => {
    // Lógica para tratar uma requisição malformada
  res.status(400).send('Requisição malformada!');
});

// Rota que retorna um código de status 404 Not Found
app.get('/not-found', (req, res) => {
  // Lógica para lidar com recurso não encontrado
  res.status(404).send('Recurso não encontrado!');
});

// Rota que retorna um código de status 500 Internal Server Error
app.get('/server-error', (req, res) => {
  // Lógica para lidar com erro interno do servidor
  res.status(500).send('Erro interno do servidor!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});