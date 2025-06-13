import net from 'net';

export async function checkPort(host, port = 80, timeout = 2000) {
  return new Promise((resolve) => {
    const socket = net.createConnection(port, host);
    let isOpen = false;

    socket.setTimeout(timeout);

    socket.on('connect', () => {
      isOpen = true;
      socket.destroy();
    });

    socket.on('timeout', () => socket.destroy());
    socket.on('error', () => {});
    socket.on('close', () => {
      resolve({ port, isOpen });
    });
  });
}
