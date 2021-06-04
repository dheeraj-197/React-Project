const mongoose = require('mongoose');
const schema = mongoose.Schema;
const employeeSchema = new schema({
    id:{type: String, required : true},
    first_name:{type: String, required : false},
    last_name:{type: String, required : false},
    email:{type: String, required : false}
})

const Employee = mongoose.model('employee_details', employeeSchema);
module.exports = Employee;
    