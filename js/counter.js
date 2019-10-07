let nbr = 0;

var display = () => {  //display gives access to input control puts number into it
    var nbrCtrl = document.getElementById("nbr"); //find html statment w/ atribute "nbr"
    nbrCtrl.value = nbr;  //puts new number in teh input box
    {
        nbrCtrl.style.color = (nbr % 2 == 0) ? "red" : "black"; //ternary operator
        nbrCtrl.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal"; //ternary operator
        nbrCtrl.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal"; //ternary operator
    }


}
var increment = () => {  //inc number, then display
    nbr++;
    display();
}
var decrement = () => {
    nbr--;
    display();
}
    
var loaded = () => {  //js being executed before html, so use
    //onloaded event to call html function
    display();
}