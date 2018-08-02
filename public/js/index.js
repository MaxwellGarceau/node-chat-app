const socket = io();

function scrollToBottom() {
  // Selectors
  const messages = jQuery('#messages');
  const newMessage = messages.children('li:last-child');
  // Heights
  const clientHeight = messages.prop('clientHeight');
  const scrollTop = messages.prop('scrollTop');
  const scrollHeight = messages.prop('scrollHeight');
  const newMessageHeight = newMessage.innerHeight();
  const lastMessageHeight = newMessage.prev().innerHeight();

  if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
    messages.scrollTop(scrollHeight);
  }
}

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
  const formattedTime = moment(message.createdAt).format('h:mm a');
  const template = jQuery('#message-template').html();
  const html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    createdAt: formattedTime
  });

  jQuery('#messages').append(html);
  scrollToBottom();
  // const formattedTime = moment(message.createdAt).format('h:mm a');
  // const li = jQuery('<li></li>');
  // li.text(`${message.from} ${formattedTime}: ${message.text}`);

  // jQuery('#messages').append(li);
});

socket.on('newLocationMessage', (message) => {
  const formattedTime = moment(message.createdAt).format('h:mm a');
  const template = jQuery('#location-message-template').html();
  const html = Mustache.render(template, {
    url: message.url,
    from: message.from,
    createdAt: formattedTime
  });

  jQuery('#messages').append(html);
  scrollToBottom();
  // const li = jQuery('<li></li>');
  // const a = jQuery('<a target="_blank">My Current Location</a>');

  // li.text(`${message.from} ${formattedTime}: `);
  // a.attr('href', message.url);
  // li.append(a);
  // jQuery('#messages').append(li);
});

// jQuery DOM Manipulation
jQuery('#message-form').on('submit', (e) => {
  e.preventDefault();
  const messageTextBox = jQuery('[name=message]');

  socket.emit('createMessage', {
    from: 'User',
    text: messageTextBox.val()
  }, () => {
    messageTextBox.val('');
  });
});

const locationButton = jQuery('#send-location');
locationButton.on('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser.');
  }

  locationButton.attr('disabled', 'disabled').text('Sending Location...');

  navigator.geolocation.getCurrentPosition((position) => {
    locationButton.removeAttr('disabled').text('Send Location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, () => {
    locationButton.removeAttr('disabled').text('Send Location');
    alert('Unable to fetch location.')
  });
});