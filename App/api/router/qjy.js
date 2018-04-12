var db = require('../db');
var apiResult = require('../utils/apiResult');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const filter = require('../utils/filter');

var express=require('express');
var multer=require('multer');
var path=require('path');
var fs=require('fs');
// 设置上传目录
var uploadpath=path.join(path.resolve(__dirname,'../'),'temp');
var upload=multer({ dest: uploadpath});

module.exports={
    reg(app){
        // 注册账户
        app.post('/Mreg',(req,res)=>{
            let username = req.body.username;
            let password = req.body.password;
            let pass_secret = crypto.createHash('md5').update(password).digest('hex');
            var sql = `insert into users(username,password,nickname) values ('${username}','${pass_secret}','星${username}')`;
            db.DBHelper.compile(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        })
        // 登录和用户名是否存在验证
        app.post('/Mlogin',(req,res)=>{
            let username = req.body.username;
            let password = req.body.password;
            var sql = `select * from users where username='${username}'`
            if(username && !password){ // 用户名是否存在验证
                db.DBHelper.compile(sql,result=>{
                    res.send(apiResult(result && result.length>0))
                })
            }else if(username && password){
                password = crypto.createHash('md5').update(password).digest('hex');
                sql += ` and password='${password}';`
                db.DBHelper.compile(sql,result=>{
                    let token = '';
                    let user = {username};
                    if(result.length>0){
                        token=jwt.sign(user,'secret',{expiresIn: "7d"});
                        res.send(apiResult(true,{token,id:result[0]['id']}));
                    }else{
                        res.send(apiResult(false));
                    }
                })
            }
        })
        // 获取用户信息
        app.get('/Mgetuser',(req,res)=>{
            let id = req.query.id;
            let sql = 'select * from users'
            if(id) sql += ` where id=${id}`
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 获取聊天窗口
        app.get('/Mgetchat',(req,res)=>{
            let sql = 'select * from addresslist'
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 修改头像（文件上传）接口
        app.post('/Muploadhead',upload.single('head'),(req,res)=>{
            var file=req.file;
            fs.rename(file.path,file.path+file.originalname);
            var headImg = "/temp/"+file.filename+file.originalname;
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(true,headImg))
            })
        })
        // 修改密码判定
        app.post('/vPsss',(req,res)=>{
            let id = req.body.id;
            let password = req.body.password;
            let newpass = req.body.newpass;
            password = crypto.createHash('md5').update(password).digest('hex');
            newpass = crypto.createHash('md5').update(newpass).digest('hex');
            var sql = `select * from users where id=${id} and password='${password}'`
            db.DBHelper.compile(sql,result=>{
                if(result.length>0){
                    var sql2 = `update users set password='${newpass}' where id=${id}`
                    db.DBHelper.compile(sql2,result2=>{
                        res.send(apiResult(true));
                    })
                }else{
                    res.send(apiResult(false));
                }
            })
        })
    }
}