
const Student = require('../models/student');
const student_login_get = (req, res) => {
       res.render("student/login");
    };

const student_login_post = async (req, res) => {

        const Sturoll = req.body.roll;   
        const individualStudent = await Student.findOne({roll : Sturoll});    
        if(!individualStudent){
          res.render("student/login", {
            error : "Kindly Login with correct Credentials"
          })
        }      
        res.render("student/view", { one : individualStudent});
    };
module.exports={
    student_login_get,
    student_login_post
}