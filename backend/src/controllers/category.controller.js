'use strict'

const mysqlConnection = require('../database');


const controller ={
    getAll: function(req, res){
        
        const query = 'SELECT * FROM category';
        
        mysqlConnection.query(query,(err, rows, fields)=>{
            if(err) return res.status(500).send({message: err});
            if(rows.length === 0) return res.status(404).send({message:'Categories not found'});
            return res.status(200).send({rows});
        })
    }
}

module.exports = controller;