var mgWrds = ["Wand", "Cauldron", "Magic", "Wizard", "Lord Voldemort", "Broomstick", "Harry Potter", "Hermione", "Ron", "Sorting Hat", "Peeves", "Spells", "Quidditch", "Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw", "Werewolves", "Transfiguration", "Potions" ];
var wrd;
var usrWrd;
var ltrs;
var wins = 0;
var losses = 0;
var guess = 9;


document.onkeyup = function(event){
    var user = event.key;

    if(user = letter ){
        //update dashes
            if (usrWrd = wrd){
                wins++;
                reset();
            }
    } else if (user != letter) {
        guess++;
        //add user to ltrs
            if(guess=0){
                losses++;
                reset();
            }
    }
}
