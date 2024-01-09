const { ObjectId } = require('mongodb');
const mongoose=require('mongoose');
const ContactSchema= new mongoose.Schema(
    {
    userId:{
        type: String,
        required: true,
    },
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type:String,
        required:true,
    },
    mobile:{
        type : Number,
        required: true,
    },
    email:{
        type: String,
        required:true,
    },
    trash:{
        type:Boolean,
        required:true
    },
    labels: {
        type: String,
        default: [],
      }
},
);
module.exports= mongoose.model("Contact",ContactSchema);