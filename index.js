const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("SERVER STARTED...");
});

app.get('/' , (req, res) => {
    console.log("access to / path");
    res.send(`
        <!Doctype html>
        <html>
            <head>
                <title>Projet 2</title>
            </head>
            <body>
                <h1>Hello World !</h1>
            </body>
        </html>
        `);
});