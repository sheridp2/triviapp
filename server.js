'use strict';

const express = require('express');

const app = express();

app.use(express.static('./src'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
