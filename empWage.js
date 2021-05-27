
const is_part_time = 1;
const is_Full_Time  =2;
const Part_Time_hrs = 4;
const is_Full_Time_hrs = 8;
const Wage_Per_Hr = 20;

//uc1

{
const is_Absent  =0;
let empcheck = Math.floor(Math.random() * 10)%2;
if(empcheck==is_Absent){
    console.log("UC1 - Employee is Absent");
} else{
    console.log("UC1 - Employee is PRESENT");
}
}





//uc2 switch case

{
const is_part_time = 1;
const is_Full_Time  =2;
const Part_Time_hrs = 4;
const is_Full_Time_hrs = 8;
const Wage_Per_Hr = 20;

let emphrs = 0;
let empcheck = Math.floor(Math.random() * 10) % 3;
switch (empcheck) {
    case is_part_time:
        emphrs = Part_Time_hrs;
        break;
    case is_Full_Time:
        emphrs = is_Full_Time_hrs;
        break;
    default:
        emphrs=0;

}

let empWage = emphrs * Wage_Per_Hr;
console.log("Uc2 - Emp-wage:" + empWage);
}



//uc-2 
{
const is_part_time = 1;
const is_Full_Time  =2;
const Part_Time_hrs = 4;
const is_Full_Time_hrs = 8;
const Wage_Per_Hr = 20;
function getWorkingHrs(empcheck){

    switch (empcheck) {
        case is_part_time:
            return Part_Time_hrs;
    
        case is_Full_Time:
           return is_Full_Time_hrs;
         
        default:
            return 0;

}
}

let empcheck = Math.floor(Math.random()*10)%3;
let emphrs =getWorkingHrs(empcheck);
let empWage = emphrs * Wage_Per_Hr;
console.log("UC -3 - Emp Wage:" + empWage);

}


//uc4

{   const Wage_Per_Hr = 20;
    const Num_of_working_Days = 20;
    let totalEmpHrs = 0;

    for (let day = 0;day<Num_of_working_Days;day++){
        let empcheck = Math.floor(Math.random() * 10 )%3;
        totalEmpHrs += getWorkingHrs(empcheck);
    }
    let empWage = totalEmpHrs * Wage_Per_Hr;
    console.log("Uc -4 Total Hrs : " + totalEmpHrs + " Emp Wage " + empWage);

}

//uc -5 
{
    const Max_Hrs_In_Month = 160;
    const Num_of_working_Days = 20;
    let totalEmpHrs = 0;
    let Total_Working_Days = 0;
    const Wage_Per_Hr = 20;

    while(totalEmpHrs <= Max_Hrs_In_Month  && Total_Working_Days<= Num_of_working_Days){
        let empcheck = Math.floor(Math.random() * 10 )%3;
        totalEmpHrs += getWorkingHrs(empcheck);
        Total_Working_Days +=1;
    }

    let empWage = totalEmpHrs * Wage_Per_Hr;
    console.log("Uc -5 Total Hrs : " + totalEmpHrs + " Emp Wage " + empWage);


}

//uc-6
function calcDailyWage(emphrs) {
    return emphrs*Wage_Per_Hr;
}

{
    const Max_Hrs_In_Month = 160;
    const Num_of_working_Days=20;
    let totalEmpHrs = 0;
    let Total_Working_Days = 0;
    let empDailyWageArr =  new Array();
    while (totalEmpHrs <=Max_Hrs_In_Month && Total_Working_Days <Num_of_working_Days) {
        Total_Working_Days++;
        let empcheck = Math.floor(Math.random()*10)%3;
        let emphrs = getWorkingHrs(empcheck);
        totalEmpHrs += emphrs;
        empDailyWageArr.push(calcDailyWage(emphrs));
    }

    let empWage = calcDailyWage(totalEmpHrs);
    console.log("UC6 -  Total Days: " + Total_Working_Days + " total Hrs: "+ totalEmpHrs + " emp Wage : " + empWage);

    console.log(empDailyWageArr);


// this is for conforming the total wage in the array to total wage we have find out my calcDailyWage Method
    let sum = 0;
    for (let i=0;i<empDailyWageArr.length;i++){
        sum = sum + empDailyWageArr[i];
    }
    console.log(sum);


    // uc - 7A usingt forEach method

let totEmpWage = 0;
function sumWage(dailywage) {
    totEmpWage += dailywage;
}

empDailyWageArr.forEach(sumWage);
console.log("UC-7A -  Total Days: " + Total_Working_Days + " total Hrs: "+ totalEmpHrs + " emp Wage : " + totEmpWage);




//using Reduce method

function totalWages(dailywage,totalWage) {
    return totalWage + dailywage;
}
console.log( "Uc 7A - Emp Wage with reduce" + empDailyWageArr.reduce(totalWages,0));

}








