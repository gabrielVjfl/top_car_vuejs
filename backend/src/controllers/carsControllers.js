const express = require('express')

const Carros_Estoque2 = require('../database/models/Carros_Estoque2')

module.exports = {
    async store(req,res) {
        const {
            marca,
            modelo,
            ano,
            preco,
            quantidade,
            motor,
            potencia,
            torque,
            peso,
        } = req.body

        try {

        const cadastrar = await Carros_Estoque2.create(req.body)
          res.status(200).send({response: cadastrar})
        }

        catch(err) {
         res.status(400).send({err: 'Ocorreu um erro interno'})
         console.log(err)
        }
        
    },
    async index(req,res) {
        await Carros_Estoque2.findAll().then((response) => {
           res.send(response)
       }).catch((err) => {
           res.send(err)
       })
   
       if(!await Carros_Estoque2.findAll()) {
           res.send({erro: 'Sem registros'})
       }
       
    }
}