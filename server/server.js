const express = require('express');
const app = express();
path = require('path');

app.use(express.static(path.join(__dirname , '/../client')));

let port = 4568;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});

