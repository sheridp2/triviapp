'use strict';

const express = require('express');

const app = express();

// app.use(express.static('./build'));
app.use(express.static(`${__dirname}/build`))
app.get('*', (req, res) => res.sendFile(`${__dirname}/build/index.html`))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
