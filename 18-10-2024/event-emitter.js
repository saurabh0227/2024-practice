const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('1st', (data) => {
  console.log('data:', data);
});

eventEmitter.emit('1st', 'Hello');
