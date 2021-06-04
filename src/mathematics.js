
import './mathematics.css';
import {useState} from "react";
import React from 'react';
import ReactDOM from 'react-dom';
function Mathematics(){
    let [valueA, setvalueA] = useState('');
    let [valueB, setvalueB] = useState('');
    let [result, setResult] = useState(0);
    let [EventName, setvalueR] = useState('result');
    let [final, setvalueF] = useState(false);
    
    function sum(event){debugger;
        event.preventDefault();
        if(valueA  == '' || valueB  == ''){
            const myelement = "Please enter the value first..";
            ReactDOM.render(myelement, document.getElementById('war_p'));
            return true;
        }
        else{
        let result = parseInt(valueA) + parseInt(valueB);
        console.log(result);
        setResult(result);
        let EventName = "Sum";
        setvalueR(EventName);
        let final = "true";
        setvalueF(final);
    }
    }
    function substract(event){
        event.preventDefault();
        if(valueA  == '' || valueB  == ''){
            const myelement = "Please enter the value first..";
            ReactDOM.render(myelement, document.getElementById('war_p'));
            return;
        }
        else{
        let result = parseInt(valueA, 10) - parseInt(valueB, 10);
        console.log(result);
        setResult(result);
        let EventName = "Subtraction";
        setvalueR(EventName);
        let final = "true";
        setvalueF(final);
    }
}
    function clear(event){
        event.preventDefault();
        setvalueA("");
        setvalueB("");
    }
    function getValueOfA(event){
        setvalueA(event.target.value);
    }
    function getValueOfB(event){
        setvalueB(event.target.value);
    }
    return(
        <>
        <h1>Addition</h1>
        <div className="border border-success p-5">
            <label>First Number : </label>
            <input className="in_p" type = "number" value = {valueA} onChange = {getValueOfA}/><br></br>
            <label>Second Number : </label>
            <input className="in_p" type = "number" value = {valueB} onChange = {getValueOfB}/><br></br>
            <p id="war_p" style={{color: "red"}}></p>
            <input type= "button" className = "btn btn-success" value = "Add" onClick = {sum}/>
            <input type= "button" className = "btn btn-success" value = "Substract" onClick = {substract}/>
            <input type= "button" className = "btn btn-danger" value = "Clear" onClick = {clear}/>
            <br></br>
            <br></br>
           {final ? <p>The {EventName} of {valueA} and {valueB} is : <b style={{color: "red"}}>{result}</b></p> : <p>Click on the button to see result.</p>}
        </div>
        </>
    );
}

export default Mathematics;