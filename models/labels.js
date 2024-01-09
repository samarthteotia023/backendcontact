const { ObjectId } = require('mongodb');
const mongoose=require('mongoose');
const labelSchema= new mongoose.Schema(
    {
        name: {
          type: String,
          required: [true, "Please add label name"],
        },
        createdBy: {
          type: String,
          required: true,
        },
      },
    );
module.exports= mongoose.model("Label",labelSchema);





