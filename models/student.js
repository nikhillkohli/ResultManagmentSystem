const mongoose = require("mongoose")
const { Schema } = mongoose;

//Students schema
const studentSchema = new Schema({
  roll: {
    type : Number,
    unique : true
  } ,
  name: String,     
  dob:{
    type:Date
  } ,
  score:Number 
});
module.exports = mongoose.model("Student", studentSchema)