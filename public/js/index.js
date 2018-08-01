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
  const li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('newLocationMessage', (message) => {
  const li = jQuery('<li></li>');
  const a = jQuery('<a target="_blank">My Current Location</a>');

  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);
  jQuery('#messages').append(li);
});

// jQuery DOM Manipulation
jQuery('#message-form').on('submit', (e) => {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('#message-form [name=message]').val()
  }, () => {

  });
});

const locationButton = jQuery('#send-location');
locationButton.on('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser.');
  }

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, () => {
    alert('Unable to fetch location.')
  });
});