'use strict';

const express = require('express'); //so i can get routes here
const Food = require('../models/data-collection-class');//create new instance and crud
const food = new Food(); //create a new instance
const validator = require('../middleware/validator')//i need to validate certain request have id info

const router = express.Router();

//RESTful routes


let createFood = async (req, res) => {
  let makeFood = await food.create(req.body);
  res.status(200).send(makeFood);
}
let getOne = async (req, res) => {
  let gettingOne = await food.get(req.params.id);
  res.status(200).send(gettingOne);
}
let getAll = async (req, res) => {
  let gettingAll = await food.get();
  res.status(200).send(gettingAll);
}
let updateInfo = async (req, res) => {
  let updating = await food.update(req.params.id, req.body)
  res.status(200).send(updating);
}
// let deleteItem = async(req,res)=>{

// }

router.post('/food', createFood);
router.get('/food/:id', validator, getOne);
router.get('/food/:id', validator, getAll);
router.put('/food/:id', validator, updateInfo);
// router.delete('/food/:id', validator, deleteItem)

module.exports = router;

// async function getOne(req, res) {
//   const id = req.params.id;
//   const oneFood = food.get(id);
//   res.status(200).send(oneFood);
// }



// async function getAll(req, res) {
//   const all = movies.get();
//   res.status(200).send(all);
// }


// async function updateInfo(req, res) {
//   const obj = req.body;
//   const findFood = food.update(req.params.id, obj)
//   res.status(200).send('findFood');
// }

