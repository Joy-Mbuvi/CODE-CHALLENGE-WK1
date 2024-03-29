const { stdin } = require("process");
const readline = require("readline");
let rl =readline.createInterface(process.stdin,process.stdout);







function GENERAL() {
    rl.question("What is your mark\n" , (score) => {
        let s = parseInt(score);
        if(isNaN(s)){
            console.log( "Kindly enter a number\n");
            GENERAL();
            return;
        }
    let grade=calculateGrade(s)
    console.log('Your grade is:'+grade+'\n');
    rl.close();


    });
    
    
}

GENERAL();





function calculateGrade(marks) {
    if (marks > 79) {
        return "A";
    }

    if (marks >=60 && marks<=79) {
        return "B";
    }

    if (marks >=49 && marks<=59) {
        return "C";
    }

    if (marks >= 40 && marks<=49) {
        return "D";
    }

    if (marks <= 40) {
        return "E";
    }

}


