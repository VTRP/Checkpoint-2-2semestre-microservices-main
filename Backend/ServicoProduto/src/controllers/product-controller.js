
const fetch = require('node-fetch')


const mongoose = require('mongoose');
const repository = require('../repositories/product-repository')


exports.get = async(req, res, next)=> {
    const data = await repository.getProduct();
    res.status(200).send(data);
}

exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body)
        res.status(201).send({message: "Produto criado com sucesso!"})
    } catch (error) {
        console.log(error);
    }
    enviarEmail() .then((data) => {
        console.log(data); 
      });
}


exports.put = async(req, res, next) => {
    const id = req.params.id
    const body = req.body
    await repository.put(id, body)
    res.status(200).send({message: "Produto atualizado com sucesso"})
}

exports.getById = async(req, res, next) =>{
    const id = req.params.id
    const data = await repository.getById(id)
    if(data == null){
        res.status(404).send()
    }

    res.status(200).send(data)
}

exports.delete = async(req, res, next) => {
    const id = req.params.id

    await repository.delete(id)
    res.status(200).send({message: "Produto removido com sucesso"})
}

async function enviarEmail() {
    data = { 
    "emailFrom" : "eduserafim7@gmail.com",
    "emailTo" : "eduserafim7@gmail.com",
    "subject" : "Teste do produo",
    "text": "Este email foi enviado a partir da API de produto"
    }
    const response = await fetch('http://localhost:8080/send-email', {
      method: 'POST', 
      
      headers: {
        'Content-Type': 'application/json'
        
      },
     
      body: JSON.stringify(data) 
    });
    return response.json(); 
}
    
