'use stric'

const app = require('./app');
const mysqlConnection = require('./database');

mysqlConnection.connect((err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Database is connected');
    app.listen( app.get('port'),()=>{
        console.log('listening on port', app.get('port'));
    })
})
