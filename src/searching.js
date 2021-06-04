import './searching.css';
import axios from "axios";
import { useEffect, useState } from "react";
//import Display from './Displayresult';

function Search(){

    const url = "https://www.googleapis.com/books/v1/volumes?q=isbn";
    const [firstInput, setTyping] = useState("");
    const [showData, setResultList] = useState([]);
    

    const showResult =() => {
        axios.get(url+": "+firstInput).then(response =>{
            let rest = response.data
            console.log(rest);
            let json = JSON.stringify(rest);
            setResultList(json);
        })
    }



    return(
        <>
            <h1>Search for books by ISBN</h1>
            <div class="container">
            <div className="t_c">
                <input type = "text-box" className ="in_txt" placeholder = "Type here..." onChange = {event => {setTyping(event.target.value)}}/>
                <input type = "button" className ="btn btn-success float-right" value = "Search" onClick={showResult}/>
            </div><br></br>
            <h5>You can see the result below...</h5>
            </div><br></br>
            <div class="container content" >{showData}</div>
            {/* <Display display={showData}/> */}
        </>
    );

}

export default Search;