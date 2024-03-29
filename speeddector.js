const { stdin } = require("process");
const readline = require("readline");
let rl =readline.createInterface(process.stdin,process.stdout);




function GENERAL() {
    rl.question("Enter speed\n" , (speed) => {
        let s = parseInt(speed);
        if(isNaN(s)){
            console.log( "Kindly enter a number\n");
            GENERAL();
            return;
        }
    console.log(speeddector(s));
    rl.close();


    });
    
    
}

GENERAL();





function speeddector(speed) {
    if (speed < 70) {
        return "OK" ;
        
    }

    let diff =speed - 70;
    let points = Math.floor(diff /5);

    if (points > 12) {
        return "Licence Suspended";
    }
    
    return 'Points deducted' + points
}


