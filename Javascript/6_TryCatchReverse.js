function reverseString(s) {
    var resposta ="";
    try{
        resposta = s.split("").reverse().join("");
        console.log(resposta);
    }catch(err){
        console.log("s.split is not a function");
        console.log(s);
    }finally{
    }
}

// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/