const express = require('express');
const app = express();
app.get('/api/user', function (req, res) {
    res.json({ name: 'my first express server.' })
})
app.listen(3000);