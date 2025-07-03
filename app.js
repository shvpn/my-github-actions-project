const express = require('express');
const app = express();
const port = 168;
app.get('/', (req, res) => {
 res.send('Hello, GitHub Actions!');
});
app.listen(port, () => {
 console.log(`App listening at http://localhost:${port}`);
});