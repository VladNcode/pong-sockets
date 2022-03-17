const http = require('http');
const io = require('socket.io');
const apiServer = require('./api');
const sockets = require('./sockets');

const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

sockets.listen(socketServer);
