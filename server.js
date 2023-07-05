const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });
server.on('connection', (ws) => {
  console.log('已经连到客户端');

  ws.on('message', (data, isBinary) => {
      console.log('接收到客户端传过来的消息 ', isBinary ? data : data.toString());

      setTimeout(() => {
        ws.send('接收到客户端信息后2秒后将信息返回：' + data);
      }, 2000);
    });
});
