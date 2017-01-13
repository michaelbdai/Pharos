/*eslint-disable*/
const exampleData = require('../../../data/exampleData.js');
const socketAuth = require('./auth').socketAuth;

module.exports = io => {
  socketAuth(io, (socket) => {
    console.log('server: socket Auth passed-------');
    socket.emit('text', 'Hi Client!');
    socket.on('getNotifications', (callback) => {  
      console.log('serving notifications');
      callback(exampleData);
    });
  })

  // io.on('connection', (socket) => {
  // });
}



// const socketioJwt = require('socketio-jwt');

// const sio = socketIo.listen(server);

// sio.set('authorization', socketioJwt.authorize({
//   secret: socket,
//   handshake: true
// }));

// sio.sockets
//   .on('connection', (socket) => {
//      console.log(socket.handshake.decoded_token.username, 'connected');
// });
