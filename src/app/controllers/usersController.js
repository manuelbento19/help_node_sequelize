const express = require('express');
const Routes = express.Router();
const db = require('./../../models/index');


//Pegando todos os registros
Routes.get("/",async(req,res)=>{
    const users = await db.users.findAll()
    res.send(users)
})

//Pegando apenas 1 registro
Routes.get("/:id",async(req,res)=>{
    const {id} = req.params;
    res.status(200).send(await db.users.findByPk(id))
})

//Cadastrando
Routes.post("/",async(req,res)=>{
    const result = await db.users.create(req.body);
    res.status(200).send(result);
})

//Actualizando
Routes.put("/:id",async(req,res)=>{
    const {id} = req.params
    const result = await db.users.update(req.body,{
        where:{id}
    })
    res.send(await db.users.findByPk(id))
})

//Deletando
Routes.delete("/:id",(req,res)=>{
    const {id} = req.params 
    db.users.destroy({where:{id}})
    res.send()
})

module.exports = route => route.use('/users',Routes);
