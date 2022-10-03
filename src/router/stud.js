const express=require("express");
// const app=express();
const router=new express.Router();
const Student=require("../models/students");

router.get("/bad",(req,res)=>{
        res.send("hello")
    })

    //1.post  create a new students using promise then catch

router.post("/students",(req,res)=>{
    console.log(req.body);
    const user=new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
});

//2.post using async await

router.post("/students",async(req,res)=>{
    try{
        console.log(req.body);
        const user=new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send();
    }
})

//3.get studentsdata

router.get("/students",async(req,res)=>{
       try{
           const getData=await Student.find();
           res.send(getData);
       }catch(e){
            res.send(e);
       }
})

//4.get indivisual data

router.get("/students/:id",async(req,res)=>{
    try{
           const _id=req.params.id;
        //    console.log(req.params);
        const studata=await Student.findById(_id);
        // console.log(studata);
         if(!studata){
            return res.status(404).send();
         }
         else{
            res.send(studata);
         }
        }catch(e){
        res.status(500).send();
    }
})

//5.findByIdAndUpdate
router.patch("/students/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const udata=await Student.findByIdAndUpdate(_id,req.body,{
            new:true});
        res.send(udata);
    }catch(e){
        res.status(500).send();
    }
      
})

//6.delete findByIdAndDelete
router.delete("/students/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const udata=await Student.findByIdAndDelete(_id);
        if(!udata)
        {
            res.status(400).send();
        }
        else{
            res.send(udata);
        }
       
    }catch(e){
        res.status(500).send();
    }
      
})






module.exports=router;