'use strict';

const express = require('express'); //so i can get routes here
const Food = require('../models/data-collection-class');//create new instance and crud
const food = new Food(); //create a new instance
const validator = require('../middleware/validator')//i need to validate certain request have id info

const router = express.Router();

//RESTful routes


let createFood = async (req, res) => {
  console.log('hitting create food', req.body);
  let makeFood = await food.create(req.body);
  res.status(200).send(makeFood);
}
let getOne = async (req, res) => {
  console.log('hitting getOne?:', req.params._id)
  let gettingOne = await food.get(req.params);
  res.status(200).send(gettingOne);
}
let getAll = async (req, res) => {
  console.log('hitting getAll?:', req.body);
  let gettingAll = await food.get();
  console.log('from getting all', gettingAll)
  res.status(200).send(gettingAll);
}
let updateInfo = async (req, res) => {
  console.log('hitting update?', req.params);
  let updating = await food.update(req.params._id, req.body);
  console.log('updating:', updating);
  res.status(200).send(updating);
}
let deleteItem = async (req, res) => {
  console.log('hitting delete?:', req.params);
  let deleting = await food.delete(req.params._id)
  console.log('deleting:', deleting)
  res.status(200).send('deleted');
}

router.post('/food', createFood);
router.get('/food/:_id', validator, getOne);
router.get('/food/', getAll);
router.put('/food/:_id', validator, updateInfo);
router.delete('/food/:_id', validator, deleteItem);

module.exports = router;


