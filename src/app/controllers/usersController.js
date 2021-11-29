const express = require('express');
const Routes = express.Router();
const db = require('./../../models/index');

const User = db.Users;

//Pegando todos os Users
Routes.get("/",async(req,res)=>{
    const users = await db.users.findAll()
    res.send(users)
})

//Pegando apenas um User
Routes.get("/:id",async(req,res)=>{
    const {id} = req.params
    const user = await db.users.findByPk(id)
    res.send(user)
})

//Cadastrando
Routes.post("/",async(req,res)=>{
    const result = await db.users.create(req.body);
    res.send(result);
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
