const express = require('express');
const Routes = express.Router();
const db = require('./../../models/index');


//Pegando todos os registros
Routes.get("/",async(req,res)=>{
    const result = await db.tests.findAll()
    res.status(200).send(result)
})

//Pegando apenas 1 registro
Routes.get("/:id",async(req,res)=>{
    const {id} = req.params;
    res.status(200).send(await db.tests.findByPk(id))
})

//Cadastrando
Routes.post("/",async(req,res)=>{
    const result = await db.tests.create(req.body);
    res.status(200).send(result);
})

//Actualizando
Routes.put("/:id",async(req,res)=>{
    const {id} = req.params
    const result = await db.tests.update(req.body,{
        where:{id}
    })
    res.status(200).send(result)
})

//Deletando
Routes.delete("/:id",async(req,res)=>{
    const {id} = req.params 
    const result = await db.tests.destroy({where:{id}})
    res.status(200).send(result)
})

module.exports = route => route.use('/tests',Routes);
