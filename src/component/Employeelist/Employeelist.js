
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "reactstrap";



function EmployeeList(){
    const url = "http://localhost:3000/employees";
    let [employees, setEmployees] = useState([]);
    const [id, setID] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");

    useEffect(() => {
        getEmployeesList();
    },[]);

    function getEmployeesList(){
        axios.get(url).then(response => {
            console.log(response)
           setEmployees(response.data.employees);
        })
        
    }
    function addRecord(){
        console.log("add record");
        console.log(firstName);
        axios.post(url,{
            "id" : id,
            "first_name" : firstName,
            "last_name" : lastName,
            "email" : email
        });
        getEmployeesList();
        
    }

    function clearRecord(){
        console.log("record clear");
        setID("");
        setfirstName("");
        setlastName("");
        setemail("");
        
    }

    function deleteRecord(id){
        console.log("delete record");
        axios.delete(url+"/"+id).then(response =>{
            console.log("record is deleted");
            getEmployeesList();
        }).catch(err => console.log(err));
        
        
    }


    
    

    //console.log(employees);
    return( 
        <>
        <h1>Update your Employee Records here..</h1>
        <br></br>
        <div className = "add-form container-fluid">
            <form >
                <label>Id:</label>
                <input type= "text" id="id" value = {id} onChange = {event => {setID(event.target.value)}}/>

                <label>First Name:</label>
                <input type= "text" id="first_name" value = {firstName} onChange = {event => {setfirstName(event.target.value)}} />

                <label>Last Name:</label>
                <input type= "text" id="last_name" value = {lastName} onChange = {event => {setlastName(event.target.value)}} />

                <label>Email:</label>
                <input type= "text" id="email" value = {email} onChange = {event => {setemail(event.target.value)}} />

                <input type= "Button"  className="btn btn-success" value="Add" onClick = {addRecord}/>
                <input type= "Button"  className="btn btn-success" value="Clear Data" onClick = {clearRecord}/>
            </form>

        </div>
        <br></br>
            <h3>Employee Records</h3>
            <Table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(emp =>
                            <tr key = {emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.first_name}</td>
                                <td>{emp.last_name}</td>
                                <td>{emp.email}</td>
                                <td>
                                <button className = "btn btn-success ">Edit</button>
                                <button className = "btn btn-danger ml-3" onClick = {() => {
                                    deleteRecord(emp.id);
                                }}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </>
    );
}

export default EmployeeList;