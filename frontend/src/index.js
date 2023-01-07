import {Terminal} from "xterm";
import './style.css'

var ws = new WebSocket(`wss://onlineklox-production.up.railway.app`);

console.log("created instace of websocket");
console.log(ws);

var term = new Terminal();
term.open(document.getElementById("terminal"));

term.write("Try out \x1B[1;3;31mKlox\x1B[0m \r\n");

term.write(
  "Contribute to the project at: https://github.com/srirajshukla/klox \r\n"
);


// term.write("$ ");
term.onData((e) => {
  ws.send(e);
});

ws.onmessage = function (e) {
  term.write(e.data);
};

