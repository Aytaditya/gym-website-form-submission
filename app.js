const express=require("express");
const path=require("path");
const app=express();
const port=80;
const fs=require("fs");

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views')); //set the directary 

app.use('/static',express.static('static')) //for serving static files
app.use(express.urlencoded());

//endpoint
app.get('/',(req,res)=>{
    res.status(200).render('demo.pug');
});
app.post('/',(req,res)=>{
    let name=req.body.name;
    age=req.body.age;
    gender=req.body.gender;
    email=req.body.email;
    address=req.body.address;
    more=req.body.more;
    let outputToWrite=`the name of the client is ${name} , his/her age is ${age},gender is ${gender},Email is ${email}, address is ${address},about him/her=>${more}`

    fs.writeFileSync('output.txt',outputToWrite)


    const params={'message':'your form has been submitted sucessfuly'};
    res.status(200).render('demo.pug',params);
})
//start the server
app.listen(port,()=>{
    console.log(`the application started succesfuly on ${port}`);
});
