let frames = [];

const loaded = () => {
    genScores();
    display();
}
const genScores = () => {
    var total = 0;
    for(let i = 0; i < 10; i++) {
        var score = Math.floor(Math.random() * 31);
        frames.push(score);
        total += score;
    }
    frames.push(total);
}
const display = () => {
    for(let i = 0; i < 11; i++) {
        document.getElementById("f"+i).innerText = frames[i];  //evaluates to "f0" (1st td tag)
    }
}





// let nbr = Math.floor(Math.random() * 31);

// var display = () => {  //display gives access to input control puts number into it
//     var nbrCtrl = document.getElementById("nbr"); //find html statment w/ atribute "nbr"
//     nbrCtrl.value = nbr;  //puts new number in teh input box

// }
// var increment = () => {  //inc number, then display
//     nbr++;
//     display();
// }
// var decrement = () => {
//     nbr--;
//     display();
// }
    
// var loaded = () => {  //js being executed before html, so use
//     //onloaded event to call html function
//     display();
// }


// var i = 0;

// for(var i = 0; i < 11; i++) {

//     Math.floor(Math.random() * 31) //produces interger 0-31
// }

