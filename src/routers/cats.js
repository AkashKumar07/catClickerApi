const express = require('express');
const Cat = require('../models/cats');
const router = new express.Router();

//create a new cat 
router.post('/cats', async(req,res)=> {
    const cat = new Cat(req.body);
    try{
        await cat.save();
        res.status(201).send(cat);
    }catch(e){
        res.status(400).send();
    }
})

// get all cats
router.get('/cats', async(req, res) => {
    try{
        const cats = await Cat.find({});
        res.status(200).send(cats);
    }catch(e){
        res.status(500).send();
    }
})

//get a cat
router.get('/cats/:id',async(req,res)=>{
    const _id = req.params.id;
    try{
        const cat = await Cat.findById(_id);
        if(!cat){
            return res.status(404).send();
        }
        res.status(200).send(cat);
    }catch(e){
        res.status(500).send();
    }
})

//update a cat
router.patch('/cats/:id', async(req,res)=>{
    const _id = req.params.id;
    try{
        const cat = await Cat.findByIdAndUpdate(_id, req.body,{new: true, runValidators: true});
        if(!cat){
            return res.status(404).send();
        }
        res.status(200).send(cat)
    }catch(e){
        res.status(400).send();
    }
})

module.exports = router
