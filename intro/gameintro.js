//game first

confirm("Lets play!")


var age = prompt("How old are you?");

if (age < 13)
{
    console.log("You're too young! But we'll let you join anyway :)");
}
else
{
    console.log("OK you're good!");
}


console.log("You are walking along the road one day, and you see a duck waddling");

console.log("Suddenly, the duck stops and stares at you. He asks "Do you want to go for a swim?"");

var userAnswer = prompt("Do you want to swim with the duck");

if (userAnswer==="yes")
{
    console.log("You just made a duck's day! Yay you!");
}
else
{
    console.log("What a prick! He forgives you anyway :)");
}

var feedback = prompt("Rate this game out of 10");

if (feedback > 7)
{
    console.log("THXXXXX you da best");
}
else
{
    console.log("I'm sorry! :( We'll work on it!");
}
