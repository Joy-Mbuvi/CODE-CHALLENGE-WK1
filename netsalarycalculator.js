//used different taxrates beacause the link provided in canvas was not working
const { stdin } = require("process");
const readline = require("readline");
let rl =readline.createInterface(process.stdin,process.stdout);


function GENERAL() {
    rl.question("Enter salary\n" , (salary) => {
        let s = parseInt(salary);
        if(isNaN(s)){
            console.log( "Kindly enter a number\n");
            GENERAL();
            return;
        }
    console.log("Your salary is",salary,"Your net salary is ", NetSalary(salary));
    rl.close();


    });
    
    
}

GENERAL();







function getTaxRate(salary) {
    if (salary <= 24000) {
        return 10;
    }
    if (salary>24000 && salary<=32333.33) {
        return 25;
    }
    if (salary>32333.33 && salary<=499999.99) {
        return 30;
    
    }
    if (salary>500000 && salary<=799999.99) {
        return 32.5;

    }
    if (salary<=800000) {
        return 35;
        
    }
}

function salaryafterthepayee(salary) {
    let rate =getTaxRate(salary)/100;
    let taxable =salary*rate;
    let income =salary - taxable;
    let net= income +2640
    return net;

}

function getNHIFrates(salary) {


    if (salary <= 5999) {
        return 150;
    }
    if (salary >= 6000 && salary <= 7999) {
        return 300;
    }
    if (salary >= 8000 && salary <= 11999) {
        return 400;
    }
    if (salary >= 12000 && salary <= 14999) {
        return 500;
    }
    if (salary >= 15000 && salary <= 19999) {
        return 600;
    }
    if (salary >= 20000 && salary <= 24999) {
        return 750;
    }
    if (salary >= 25000 && salary <= 29999) {
        return 850;
    }
    if (salary >= 30000 && salary <= 34999) {
        return 900;
    }
    if (salary >= 35000 && salary <= 39999) {
        return 950;
    }
    if (salary >= 40000 && salary <= 44999) {
        return 1000;
    }
    if (salary >= 45000 && salary <= 49999) {
        return 1100;
    }
    if (salary >= 50000 && salary <= 59999) {
        return 1200;
    }
    if (salary >= 60000 && salary <= 69999) {
        return 1300;
    }
    if (salary >= 70000 && salary <= 79999) {
        return 1400;
    }
    if (salary >= 80000 && salary <= 89999) {
        return 1500;
    }
    if (salary >= 90000 && salary <= 99999) {
        return 1600;
    }
    if (salary >= 100000) {
        return 1700;
    }

}

function NetSalary(salary) {
    let aftPayee =salaryafterthepayee(salary)
    let nhif = getNHIFrates(salary);
    let NetSalary= aftPayee-nhif;

    return NetSalary
}