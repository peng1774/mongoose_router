const express = require('express');
const mongoose = require('mongoose');

const Promotions = require('../models/promotions');

const promoRouter = express.Router();

promoRouter.route('/')
.get((req,res,next)=>{
	Promotions.find({})
	.then((promotions)=>{
		res.statusCode = 200;
		res.setHeader("Content-Type","application/json");
		res.json(promotions);
	},(err)=>next(err))
	.catch((err)=>next(err));
})
.post((req,res,next)=>{
	Promotions.create(req.body)
	.then(({promotion})=>{
		console.log('promotion created successfully');
		res.statusCode = 200;
		res.setHeader("Content-Type","application'json");
		res.json(promotion);
	},(err)=>next(err))
	.catch((err)=>next(err));
})
.put((req,res,next)=>{
	res.statusCode = 403;
	res.end('PUT operation not supported.');
})
.delete((req,res,next)=>{
	Promotions.remove({})
	.then((resp)=>{
		res.statusCode = 200;
		res.setHeader("Content-Type","application/json");
		res.json(resp);
	},(err)=>next(err))
	.catch((err)=>next(err));
});

module.exports = promoRouter;