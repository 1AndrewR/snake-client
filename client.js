const net = require('net');

// establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
// event handler for messages from server
  conn.on('data', (data) => {
    console.log('server says :', data);
  });
// encodes messages from server to utf8
  conn.setEncoding('utf8');
  
  return conn;
};

module.exports = connect;