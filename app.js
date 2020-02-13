// function showInConsole (word) {
//     console.log(word);
// };

showInConsole = (word) => {
    console.log(word);
}

showInConsole("With a message.");

setTimeout(() =>{
    showInConsole("A different message.");
},2000);

setTimeout(function(){ alert("Hello"); }, 3000);
