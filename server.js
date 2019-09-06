const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');
require('./server/index')(app);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, '/dist/agmp')));

app.get('*', function(request, response, next) {
  console.log('requester', request.ip, request.ips)
  if (!request.url.match('\/api')) {
    response.sendFile(path.join(__dirname, '/dist/agmp/index.html'));
 }

  next();
});

app.listen(app.get('port'), function() {
  console.log(`Node app is running on http://localhost:${app.get('port')}`);
});

