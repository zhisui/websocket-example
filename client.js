// // 打开一个 web socket，设定websocket服务器地址和端口
var ws = new WebSocket('ws://localhost:3000')
// //开启连接open后客户端处理方法
ws.onopen = function () {
    // Web Socket 已连接上，在页面中显示消息
    document.getElementById('res').innerHTML = '当前客户端已经连接到websocket服务器'
}

ws.onmessage = function (mevt) {
    document.getElementById('res').innerHTML = mevt.data
    ws.close()
}
ws.onclose = function (mevt) {
    console.log('连接关闭')
}

// 在输入框中输入消息后点击按钮发送到服务端
let msg = ''
const btn = document.getElementById('btn')
const input = document.getElementById('input')
input.addEventListener('change', (e) => {
    msg = e.target.value
})
btn.addEventListener('click', () => {
    ws.send(msg);
})

