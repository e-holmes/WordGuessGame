var mgWrds = ["wand", "cauldron", "magic", "wizard", "voldemort", "broomstick", "harry", "hermione", "ron", "peeves", "spells", "quidditch", "gryffindor", "hufflepuff", "slytherin", "ravenclaw", "werewolves", "transfiguration", "potions", "hippogriff" ];
var wrd;
var usrWrd;
var ltrs = [];
var wins = 0;
var losses = 0;
var guess = 14;
var user;

//reset();
reset();


document.onkeyup = function(event){
    user = event.key;
    compare();  
}

function reset(){
    guess=14;
    document.getElementById("guesses").innerHTML = "Guesses Left: " +guess;
    wrd = mgWrds[Math.floor(Math.random() *mgWrds.length)];
    console.log(wrd);
    usrWrd = wrd.split("");
    console.log(usrWrd);
    dash();
    document.getElementById("userWord").innerHTML = usrWrd;
    ltrs=[];
    document.getElementById("letters").innerHTML = "Letters Used: " +ltrs;
    document.getElementById("wins").innerHTML = "Wins: " +wins;
    document.getElementById("losses").innerHTML = "Losses: " +losses;
}



function dash(){
    for (i=0; i <usrWrd.length; i++){
    usrWrd[i]= "-"
    }
}

function updateD(){
    for (i=0; i <usrWrd.length; i++){
        if (user == wrd[i]){
            usrWrd[i] = wrd[i]
            document.getElementById("userWord").innerHTML = usrWrd;
        }
    }
}

function updateB(){
 //   var done = false;
 //   if (done){
  //  for (y=0; y <usrWrd.length; y++){
  //      if (user == ltrs[y]){
   //         done = true;
   //     }
  //  }
// }
    guess=guess-1;
    document.getElementById("guesses").innerHTML = "Guesses Left: " +guess;
    ltrs.splice(ltrs.length, 0, user);
    document.getElementById("letters").innerHTML = "Letters Used: " +ltrs;
}

function compare(){
    var ltrGsRt = false;
    for (i=0; i <usrWrd.length; i++){
        if(user == wrd[i] ){
            ltrGsRt = true;
            updateD();
                if (usrWrd.join("") == wrd){
                    wins++;
                    document.getElementById("wins").innerHTML = "Wins: " +wins;
                    reset();
                }
        } 
    }
    
    if(ltrGsRt === false){
        updateB();
        if(guess <= 0){
            losses--;
            document.getElementById("losses").innerHTML = "losses" +losses;
            reset();
        }
     }
}
