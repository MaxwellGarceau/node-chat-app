const socket = io();

socket.on('connect', () => {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'pedro@yahoo.com',
    text: 'Hola!'
  });

  // // createMessage Event
  // socket.emit('createMessage', {
  //   from: 'them',
  //   text: 'Lorem Ipsum'
  // });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newEmail', (email) => {
  console.log('New email: ', email);
});

// newMessage Event
socket.on('newMessage', (message) => {
  console.log('Message: ', message);
});

socket.emit('createMessage', {
  from: 'Frank',
  text: 'Hi'
}, (data) => {
  console.log('Got it:', data);
});
