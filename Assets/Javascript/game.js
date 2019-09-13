var mgWrds = ["wand", "cauldron", "magic", "wizard", "voldemort", "broomstick", "harry", "hermione", "ron", "peeves", "spells", "quidditch", "gryffindor", "hufflepuff", "slytherin", "ravenclaw", "werewolves", "transfiguration", "potions", "hippogriff" ];
var help = ["Cast's spells.", "You put things in it.", "A life without it is a muggle life.", "A magical person", "The unnamed", "Needed for quidditch.", "A great hero.", "The founder of S.P.E.W.", "The master of light.", "A pesky ghost.", "They typically rhyme or are latin.", "A famous sport.", "House of the brave.", "The house of finders.", "No good comes from this house.", "The house of puzzles", "They are only dangerous once a month", "The best class for cat lovers.", "Drinking can have grave consequences.", "Harry, Hermione, and Sirius have all ridden one."]
var wrd;
var usrWrd;
var ltrs = [];
var wins = 0;
var losses = 0;
var guess = 14;
var user;
var ran;

//reset();
reset();


document.onkeypress = function(event){
    user = event.key;
    compare();  
}

function myfunction(){
    document.getElementById("hint").innerHTML = "Here's a hint: " +help[ran];
}

function reset(){
    ran=Math.floor(Math.random() *mgWrds.length);
    guess=14;
    document.getElementById("guesses").innerHTML = "Guesses Left: " +guess;
    wrd = mgWrds[ran];
    console.log(wrd);
    usrWrd = wrd.split("");
    console.log(usrWrd);
    dash();
    document.getElementById("userWord").innerHTML = usrWrd.join(" ");
    ltrs=[];
    document.getElementById("letters").innerHTML = "Letters Used: " +ltrs;
    document.getElementById("wins").innerHTML = "Wins: " +wins;
    document.getElementById("losses").innerHTML = "Losses: " +losses;
    document.getElementById("hint").innerHTML="";
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
            document.getElementById("userWord").innerHTML = usrWrd.join(" ");
        }
    }
}

function updateB(){
if (!ltrs.includes(user)){
    guess=guess-1;
    document.getElementById("guesses").innerHTML = "Guesses Left: " +guess;
    ltrs.splice(ltrs.length, 0, user);
    document.getElementById("letters").innerHTML = "Letters Used: " +ltrs;
}}

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
            losses++;
            document.getElementById("losses").innerHTML = "losses" +losses;
            reset();
        }
     }
}
