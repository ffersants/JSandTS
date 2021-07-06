const express = require('express');

const app = express();

setTimeout(
    () => {
        app.emit('server ready')
    }, 5000
)

app.on('server ready', () => {
    app.listen(10, () => {
        console.log("Servidor rodando!")
    })
})