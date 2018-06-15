const path = require('path');
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, '/dist/agmp')));

app.get('*', function(request, response) {
  console.log(path.join(__dirname, '/dist/agmp/index.html'));
    response.sendFile(path.join(__dirname, '/dist/agmp/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
