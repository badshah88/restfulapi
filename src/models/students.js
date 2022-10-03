const mongoose=require("mongoose");
const validator=require("validator");

//defining schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email is present already"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
    },
        phone:{
            type:Number,
            min:10,
            required:true,
            unique:true
        },
        address:{
            type:String,
            required:true,
        }

    
});

//create models or collections
const Student=new mongoose.model("Student",studentSchema);


module.exports=Student;