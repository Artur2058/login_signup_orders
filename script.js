const db2=require("./db2/index.js");
const a2=db2.login_page;
const db1=require("./db1/index2.js");
const a=db1.sign_up;
const db_of_orders=require("./db_of_orders/index3.js");
const a3=db_of_orders.orders;
const fs=require("fs");
const bcrypt=require("bcrypt");
const express=require("express");
const { v4: uuidv4 } = require('uuid');
const app=express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { cookie, redirect } = require("express/lib/response.js");
const { decode } = require("punycode");
app.use(cookieParser());
app.use(express.json());
app.get("/index3.html", (req, res)=>{
    const token=req.cookies.token;
    if(!token){
        res.redirect("/index2.html")
    }
    res.sendFile(__dirname+"/signup_and_login/index3.html");
})
app.use(express.static("signup_and_login"));


app.post("/index.html", (req, res)=>{
    let data=req.body;
    const hashedPassword = bcrypt.hashSync(data.Password, 10);
    data.Password = hashedPassword;
    let x=0;
    a.findAll().then(result=>{
        for(let i=0; i<result.length; i++){
            if(data.Email!==result[i].Email && data.Pasword!==result[i].Password){
                x++;
            }
        }
        if(x==result.length){
            a.create(data);
            console.log(data.Password);
            console.log("Successful");
            res.json({ "message" : "Successful"})
        }
        else{
            console.log("It' wrong");
            res.json({ "message" : "It's wrong"})
        }
    })
})

const secretKey="as dksa asjsdjsad";
app.post("/index2.html", (req, res)=>{
    let data2=req.body
    let answ=false;
    a.findAll().then( async result=>{
        for(let i=0; i<result.length; i++){
            if(data2.Email==result[i].Email && await bcrypt.compare(data2.Password, result[i].Password)){
                answ=true;
                a2.create(data2)
                console.log("succesful");
                const userId=uuidv4();
                const token=jwt.sign({email:data2.Email, username:result[i].Name, userid:userId}, secretKey, {expiresIn:"1h"});
                res.cookie("token", token, {httpOnly:true});
                res.json({"message" : "Password is right"});
            }
        }
        if(answ==false){
            console.log("PASSWORD IS FALSE");
            res.json({
                "message" : "Password is false",
        });
        }
    })
   
})

app.post("/index3.html", (req, res)=>{
    let token=req.cookies.token;
    jwt.verify(token, secretKey, (err, decode)=>{
        if(err){
            console.log("error of find username");
        }
        else{
            let username=decode.username;
            let userId=decode.userId;
            res.json({"username":username, "userId":userId});
        }
    })
})



app.listen(3000);



    // a.destroy({
    //     where:{},
    //     truncate:true,
    // }).then((result) => {
    //     result.id=0;
    // }).catch((err) => {
    // });

    // a.findOne({where:{id:1}}).then((result) => {
    //     console.log(result)
    // }).catch((err) => {    
    // });

    // a.update({
    //     Email:"asasa",
    //     Password:"bcbcncnncxncxc",
    // }, {
    //     where: {id:1},
    // })

    // a.findByPk(1).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    // });

    // a.findAll({where:{id:1}}).then((result) => {
    //     console.log(result)
    // }).catch((err) => {   
    // });