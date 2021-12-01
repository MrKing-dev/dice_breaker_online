/* GLOBAL VARIABLES */

let diceArr = [];
let highlightArr = [];
let highlightLength = 0;

/* GLOBAL VARIABLES */



function runDice(form){
        const sidesInput = form.sides.value;
        const sides = parseInt(sidesInput);
        const quan = form.quan.value;
        let highlight = false; 
        let explode = false;
        let combine = false;     

        if(form.successes.checked){
            highlight = true;
        }

        if(form.explode.checked){
            explode = true;
        }

        if(form.combine.checked){
            combine = true;
        }

if(explode === true){
            rollDice(sides, quan);
            let highRoll = diceArr.filter(num => num === sides).length;
            rollDice(sides, highRoll);
            
        } else {
            rollDice(sides, quan);
        }


        if (highlight === true){
            if (sides === 10) {
                highlightArr = diceArr.filter(num => num >=8);
            }
            else if (sides === 20) {
                highlightArr = diceArr.filter(num => num === 20);
            }
            else {
                highlightArr = [];
            }
            highlightLength = highlightArr.length;            
          }
console.log(diceArr);

        if(combine === true){
            let diceSum = 0;
            for(let i in diceArr) {
                diceSum += diceArr[i];
                }
              diceArr = diceSum;
        }
console.log(diceArr);

const finalDice = diceArr.toString();

if(highlight){
document.getElementById('diceResult').innerHTML = `Dice Rolled: ${finalDice} Successes: ${highlightLength}.`
}else{
document.getElementById('diceResult').innerHTML = finalDice;
}



}



function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max)+1;
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
          }

function rollDice (sides, quan) {
            for (let count = 0; count < quan; count++){
                diceArr.push(getRandomInt(1, sides));
            }

        }
