const express = require('express');
const app = express();
// Part 1
// app.use('/css', express.static("assets/css"))
// app.use('/images', express.static("assets/images"))
// app.use('/scripts', express.static("assets/scripts"))

// Part 2
// app.use("/scripts", express.static("assets/scripts"))

// Part 3
app.use("/stylesheets", express.static("assets/css"))

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));