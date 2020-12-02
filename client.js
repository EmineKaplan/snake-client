const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () =>
  console.log('Succsessfully connected to game')
  );

 conn.on("data",(data) => console.log("server says ",data))

 
  return conn;
}
module.exports= {connect}

/*const { CONNREFUSED } = require('dns');
const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host : '127.0.0.1',
    port : 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
  });

  conn.on('connect', () => {
    conn.write('Name: Kpl');
  });

  conn.on('connect', () => {
    conn.write('Move: up')
  });

  conn.on('connect', () => {
    conn.write('Move: right')
  });

  conn.on('date', (data) => {
    console.log('Server says: data');
  });
}*/
