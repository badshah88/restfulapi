const express=require("express");
require("./db/conn");
const Student=require("./models/students");
const stud=require("./router/stud");
const app=express();
const port=process.env.PORT || 3000;

app.use(stud);
app.use(express.json());

// app.get("",(req,res)=>{
//        res.send("hello from other side alien");
// });

//1.post  create a new students using promise then catch

// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user=new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// });

//2.post using async await

// app.post("/students",async(req,res)=>{
//     try{
//         console.log(req.body);
//         const user=new Student(req.body);
//         const createUser=await user.save();
//         res.status(201).send(createUser);
//     }catch(e){
//         res.status(400).send();
//     }
// })

//3.get studentsdata

// app.get("/students",async(req,res)=>{
//        try{
//            const getData=await Student.find();
//            res.send(getData);
//        }catch(e){
//             res.send(e);
//        }
// })

//4.get indivisual data

// app.get("/students/:id",async(req,res)=>{
//     try{
//            const _id=req.params.id;
//         //    console.log(req.params);
//         const studata=await Student.findById(_id);
//         // console.log(studata);
//          if(!studata){
//             return res.status(404).send();
//          }
//          else{
//             res.send(studata);
//          }
//         }catch(e){
//         res.status(500).send();
//     }
// })

//5.findByIdAndUpdate
// app.patch("/students/:id",async (req,res)=>{
//     try{
//         const _id=req.params.id;
//         const udata=await Student.findByIdAndUpdate(_id,req.body,{
//             new:true});
//         res.send(udata);
//     }catch(e){
//         res.status(500).send();
//     }
      
// })

//6.delete findByIdAndDelete
app.delete("/students/:id",async (req,res)=>{
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
    


app.listen(port,()=>{
    console.log(`listen port is ${port}`);
})


//router setup
//1.const router=new.express.router()
//define router
//2.router.get("/bad",(req,res)=>{
//     res.send("hello")''
// })
//register router
// 3.app.use(router)