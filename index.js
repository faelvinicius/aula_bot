const bot = require('./bot'); 

try {
    bot.startPolling();
        
} catch (error) {
    console.log('Ocorreu um erro inesperado, tente fazer sua chamada novamente',error);    
}

const http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   res.write('ok');
   res.end();
 }).listen(3005);