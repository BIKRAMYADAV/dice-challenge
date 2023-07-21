var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomImage = "./images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomImage2 = "./images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "DRAW";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!!!";
}

else{
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS!!!";

}
