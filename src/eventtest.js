import './searching.css';
import { useState } from "react";
import axios from "axios";

function EventTest(){
    const url = "https://jsonplaceholder.typicode.com/todos";
    const [result, setResultList] = useState([]);
    const [title, setFlag] = useState(false);

    
    const showResult =() => {
        axios.get(url).then(response =>{
            let rest = response.data
            console.log(rest);
            setResultList(rest);
            setFlag(true);
        })
    }

    // const showResult = async () => {
    //     const url = await fetch("https://jsonplaceholder.typicode.com/todos");
    //     const result = await url.json();
    //     setResultList(result);
    //     setFlag(true);
    // }


    return(
        <>
            <div class="container">
            
                <input type = "button" className ="btn btn-success" value = "Click Here" onClick={showResult}/>
            </div><br></br>
            <div >
            <h5>You can see the result below...</h5>
            </div>
            <br></br>
            <div class="content">
                        {
                        title && result.map(item => <ul>
                            <li>{item.title}</li>
                            </ul>
                            )
                        }
            </div>            
        </>
    );

}

export default EventTest;