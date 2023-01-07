var express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const PORT = process.env.PORT || 3156;
const wss = new WebSocket.Server({ server });

wss.on('connection', function(ws) {
  console.log("new connection?");
  startShell(ws)
});

const os = require('os');
const pty = require('node-pty');

const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

function startShell(ws) {
  console.log("A new client connected");
  
  // console.log(homed)
  
  const ptyProcess = pty.spawn("java.exe", ["-jar", "Klox.jar"], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: __dirname,
    env: process.env
  });
  
  console.log("PTY process created");

  // ptyProcess.write('java -jar Klox.jar\r\n')
  
  ptyProcess.onData(function(data) {
    ws.send(data);
  });

  ws.on('message', function(msg) {
    ptyProcess.write(msg);
  });
}

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

