var db = require('../db');
var apiResult = require('../utils/apiResult');
const filter = require('../utils/filter');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

var express=require('express');
var multer=require('multer');
var path=require('path');
var fs=require('fs');
// 设置上传目录
var uploadpath=path.join(path.resolve(__dirname,'../'),'temp');
var upload=multer({ dest: uploadpath});

module.exports={
    reg(app){
        app.post('/MgetCar',(req,res)=>{
        })
    }
}