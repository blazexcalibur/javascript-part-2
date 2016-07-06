/*
Create a file called warriors.js, then, do the following. Commit and push as often as you like so that we can monitor the progress of your code in the pull request.
Create a constructor function called Warrior that can create new warriors. This function will take parameters name, and gender. 
name can be any string, gender can be M or F. It should create a warrior that has these properties:
name: the value that was passed to the constructor
gender: the value that was passed to the constructor
level: 1
weapon: wooden sword
power: a random number between 1 and 100
In addition to that, every object that gets created should have the following methods:
fight: will output to the console: " rushes to the arena with "
faceoff: faceoff takes one argument called opponent. Based on the power of each opponent, this method should output to the console which player won the fight based on their power. 
Be as creative as you like with the text of this method :)
Finally, create a bunch of warriors and make them fight together.
*/

function warriors(name, gender, level, weapon, power) {
    name: name;
    gender: gender;
    level: level;
    weapon: weapon;
    power: power;
    fight: function fighting() {
        console.log(" rushes to the arena with ");
    }
    faceoff: function facingOff(opponent) {
        if (opponent.power > warriors.power) {
            console.log("you lost the faceoff!");
        } else {
            console.log("you win the faceoff");
        }
    };
};


