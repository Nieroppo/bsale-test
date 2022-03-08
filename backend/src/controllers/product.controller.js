'use strict'

const mysqlConnection = require('../database');


const controller ={
    getAll: function(req, res){
        let  page = 0;
        if(req.params.page) page = req.params.page -1;
        
        if(page < 0) page = 0;
        
        const lowerLimit = page*10;
        
        const limit = lowerLimit+','+10;
        const query = 'SELECT * FROM product ORDER BY category ASC LIMIT '+ limit;
        
        mysqlConnection.query(query,(err, rows, fields)=>{
            if(err) return res.status(500).send({message: err});
            if(rows.length === 0) return res.status(404).send({message:'Products not found'});
            return res.status(200).send({rows});
        })
    },
    Search: function(req, res){

        let  page = 0;
        if(req.params.page) page = req.params.page -1;
        
        if(page < 0) page = 0;
        
        const lowerLimit = page*10;
        
        const limit = lowerLimit+','+10;

        const search ='%'+ req.params.search+'%';
        const query = `SELECT p.id, p.name, p.price, p.url_image, p.discount, p.category 
        FROM product p , category c 
        WHERE p.name LIKE ? OR (c.name LIKE ? AND c.id = p.category)
        GROUP BY p.id
        ORDER BY p.category ASC LIMIT ` +limit;

        mysqlConnection.query(query,[search, search],(err, rows, fields)=>{
            if(err) return res.status(500).send({message: err});
            if(rows.length === 0) return res.status(404).send({message:'Product not found'});
            return res.status(200).send({rows});
        })
    }
    

}

module.exports = controller;