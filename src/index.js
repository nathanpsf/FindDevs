const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://root:root@cluster0-rhzcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Métodos HTTP get, post, put, delete
// Query Params: request.query (Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body dados para criação ou alteração de um registro

// MongoDB (Não-relacional)

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
