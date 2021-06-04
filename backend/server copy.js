const express = require('express');
const fs = require('fs');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req,res) =>{
    res.send("listening to port 3000...!!");
})

app.get('/employees', (req,res) =>{
    fs.readFile('db.json', (err, data) =>{
        console.log(data);
        res.end(data);
    })
})

app.get('/employees/:id',function(req,res){debugger;
    fs.readFile('db.json',function(err,data){
        const employeeData = JSON.parse(data);
        console.log(req.params.id);
        console.log("end point");
        const employeeToSet = employeeData["employees"];
        const emp_dat = employeeToSet.find(emp=>emp.id == req.params.id);
        //console.log(employeeData);
        console.log(emp_dat);
        //console.log(employeeToSet);
        res.end(JSON.stringify(emp_dat));
    })
})

app.delete("/employees/:id", (req, res) => {
    fs.readFile("db.json", (err, data) => {
        const employee = JSON.parse(data);
       const empData = employee.employees;
      const emp1 = empData.filter(emp => emp.id !== req.params.id); // also we can do it this way employee["employees"].find(emp => emp.id == req.params.id);
      console.log(emp1);
      const empObj = { "employees" : emp1};
      console.log(empObj);
       fs.writeFile("db.json", JSON.stringify(empObj), function(err, data){
            if(err) console.log(err);
            console.log("record is updated!");
        })
       res.end(JSON.stringify(empObj));    
    })
})

app.post("/employees", function(req, res) {
    fs.readFile("db.json", function(err, data){
        const employee = JSON.parse(data);
        const empData = employee.employees;
       console.log( req.body.first_name);
        const emp1 = { "id" : req.body.id,
                      "first_name" : req.body.first_name,
                      "last_name" : req.body.last_name,
                      "email" : req.body.email,
                    }
        if(empData.find(emp => emp.id == emp1.id)){
            console.log("Id is Present..Please enter other id")
        }else{
            //console.log(emp1.id);
            const result = [...empData, emp1];
            const empObj = { "employees" : result};
            //console.log(empObj);
             fs.writeFile("db.json", JSON.stringify(empObj), function(err){
                 if(err) console.log(err);
                 console.log("Recored is added");
             })
             res.end(JSON.stringify(empObj));
        }
    })
})





app.listen(3000);