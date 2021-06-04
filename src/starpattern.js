function Starpattern(){
    console.log("star pattern showing...!!");

    function showStar(){

        document.write("1"+"<br/>")

        let y = 6;
        let x = 6;

        let str = "";

        for(let i = 1; i < y; i++ ){
            for(let j = 1; j < x; j++){
                if(i + j >= y){
                    str = str.concat(" * ");
                }else{
                    str = str.concat(" ")
                }
            }
            str = str.concat("<br/>")
        }

        document.write(str+"2"+"<br/>");


        let str2 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i <= j ){
                        str2 = str2.concat(" * ");
                    }else{
                        str2 = str2.concat(" ")
                    }
                }
                str2 = str2.concat("<br/>")
            }

            document.write(str2+"3"+"<br/>")

            let n = 5; 
            let string = "";
            for (let i = 1; i <= n; i++) { 
              for (let j = 0; j < n; j++) {
                string += " * ";
              }
              string += "<br/>";
            }
            document.write(string+"4"+"<br/>");

            function createPyramid()
            {
                let n = 5;
                let string = "";
                for (let i = 1; i <= n; i++) {
                  for (let j = n; j > i; j--) {
                    string += " ";
                  }
                  for (let k = 0; k < i * 2 - 1; k++) {
                    string += " * ";
                  }
                  string += "<br/>";
                }
                for (let i = 1; i <= n - 1; i++) {
                  for (let j = 0; j < i; j++) {
                    string += " ";
                  }
                  for (let k = (n - i) * 2 - 1; k > 0; k--) {
                    string += " * ";
                  }
                  string += "<br/>";
                }
                document.write(string+"5"+"<br/>");
            }
            
            createPyramid();
            function createPyramidd()
            {
            let n = 5; 
            let string = "";
            for (let i = 0; i < n; i++) {
            for (let j = 0; j < i; j++) {
                string += " ";
            }
            for (let k = 0; k < (n - i) * 2 - 1; k++) {
                string += " * ";
            }
            string += "<br/>";
            }
            for (let i = 2; i <= n; i++) {
            for (let j = n; j > i; j--) {
                string += " ";
            }
            for (let k = 0; k < i * 2 - 1; k++) {
                string += " * ";
            }
            string += "<br/>";
            }
            document.write(string+"6"+"<br/>");
        }
        createPyramidd();

        function pri(){
            let n = 5; 
            let string = "";
            for (let i = 0; i < n; i++) {
              for (let j = 0; j < i; j++) {
                string += " ";
              }
              for (let k = 0; k < (n - i) * 2 - 1; k++) {
                string += "*";
              }
              string += "\n";
            }
            document.write(`<pre>${string+"7"+"<br/>"}</pre>`);
        }
        pri();
        function prir(){
        let n = 5; 
        let string = "";
        for (let i = 1; i <= n; i++) {
          for (let j = n; j > i; j--) {
            string += " ";
          }
          for (let k = 0; k < i * 2 - 1; k++) {
            string += "*";
          }
          string += "\n";
        }
        for (let i = 1; i <= n - 1; i++) {
          for (let j = 0; j < i; j++) {
            string += " ";
          }
          for (let k = (n - i) * 2 - 1; k > 0; k--) {
            string += "*";
          }
          string += "\n";
        }
        document.write(`<pre>${string+"8"+"<br/>"}</pre>`);
    }
        prir();

        function tri(){
            let n = 5; 
            let string = "";
            for (let i = 0; i < n; i++) {
              for (let j = 0; j < i; j++) {
                string += " ";
              }
              for (let k = 0; k < (n - i) * 2 - 1; k++) {
                string += "*";
              }
              string += "\n";
            }
            for (let i = 2; i <= n; i++) {
              for (let j = n; j > i; j--) {
                string += " ";
              }
              for (let k = 0; k < i * 2 - 1; k++) {
                string += "*";
              }
              string += "\n";
            }
            document.write(`<pre>${string+"9"+"<br/>"}</pre>`);
        }
        tri();

        function triang(){
            let n = 5;
            let string = "";
            for (let i = 1; i <= n; i++) {
              for (let j = n; j > i; j--) {
                string += " ";
              }
              for (let k = 0; k < i * 2 - 1; k++) {
                string += "*";
              }
              string += "<br>";
            }
            document.write(`<pre>${string}</pre>`);
        }
            triang();
    }

    return(
        <>
        <h1>Different Different Star Pattern...!!</h1>
        <button onClick = {showStar}>Click here</button>
        
        </>
    )
}


export default Starpattern;