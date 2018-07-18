const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, '/dist/agmp')));

app.get('*', function(request, response) {
  console.log(path.join(__dirname, '/dist/agmp/index.html'));

  fs.readFile(path.join(__dirname, '/dist/agmp/index.html'), (err, data) => {
    console.log(err)
    console.log(data.toString());
  });

  fs.readdir(path.join(__dirname, '/dist/agmp'), (err, files) => {
    console.log(files)
  })

  response.sendFile(path.join(__dirname, '/dist/agmp/index.html'));
});

app.listen(app.get('port'), function() {
  console.log(`Node app is running on http://localhost:${app.get('port')}`);
});

