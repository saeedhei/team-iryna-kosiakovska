import 'dotenv/config';
import app from '../app';
import debug from 'debug';
import http from 'http';

const { PORT, HOST_PORT } = process.env;
const log: debug.Debugger = debug('cards:server');
const port = normalizePort(PORT || '3000');

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val: string | number): number | string | boolean {
  if (typeof val === 'number') {
    return val;
  }

  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

function onListening(): void {
  const addr = server.address();
  let bind: string;
  const blue = '\x1b[34m';
  const reset = '\x1b[0m';

  if (addr === null) {
    bind = 'unknown';
  } else if (typeof addr === 'string') {
    bind = `pipe ${addr}`;
  } else {
    bind = `port ${addr.port}`;
  }

  console.log(`Listening on ${blue}http://localhost:${HOST_PORT}/${reset}`);
  log(`Listening on ${bind}`);
}
