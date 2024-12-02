const express = require('express');
const app = express();
// Your code here
app.use('/css', express.static("assets/css"))
app.use('/images', express.static("assets/images"))
app.use('/scripts', express.static("assets/scripts"))

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));