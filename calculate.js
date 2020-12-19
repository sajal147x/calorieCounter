//calculate BMR
function calculateBMR(){
    //take in all the values
    var age = document.getElementById("userAge").value;
    var gender = document.getElementById("gender").value;
    var heightFeet = document.getElementById("heightFeet").value;
    var heightInches = document.getElementById("heightInches").value;
    var weight = document.getElementById("weight").value;
    var bodyFat = document.getElementById("bodyFat").value;
    var heightCM = (heightFeet*30.48)+(heightInches*2.54);
    var weightKG = weight/2.205;
    var BMR;
    //validating user input
    if(age>80||age<15||age==""|| isNaN(age)){
        alert("Please enter valid age");
        return;
    }
    if (heightFeet==""||isNaN(heightFeet)||isNaN(heightInches)){
        alert("Please enter valid height");
        return;
    }
    if (isNaN(weight)){
        alert("Please enter a valid weight");
        return;
    }
    if (heightInches==""){
        heightInches = 0;
    }
    if (isNaN(bodyFat)&&bodyFat!=""){
        alert("Enter a valid body fat%")
    }
    //use the equation without body fat
    if (bodyFat==""){
        if(gender=="Male"){
            BMR = (10*weightKG)+(6.25*heightCM)-(5*age)+5;
        }
        if(gender=="Female"){
            BMR = (10*weightKG)+(6.25*heightCM)-(5*age)-161;
        }
    }
    //use the equation with body fat
    if (bodyFat>1 && bodyFat < 100){
        BMR = 370 + (21.6*(1-(bodyFat/100))*weightKG);
    }
    return BMR;
}

//calculate total maintainence calories using BMR and activity level
function calculateTotalCals(){
    var bmr = calculateBMR();
    var activityLevel = document.getElementById("activityLevel").value;
    var totalCals = Math.round(bmr*activityLevel);
    return totalCals;
}

//calculate calories fror different weight loss goals
function calculateDeficit(){
    var bmr = Math.round(calculateBMR());
    var maintain = calculateTotalCals();
    var loseHalf = maintain-250;
    var loseOne = maintain-500;
    var loseTwo = maintain-1000;
    var calorieList = [bmr, maintain, loseHalf, loseOne, loseTwo];
    return calorieList;
}

//display the results
function showDeficit(){
    document.getElementById("container2").style.display = "block";
    document.getElementById("result").style.dsiplay = "block";
    document.getElementById("resultCalsBMR").style.display = "inline";
    document.getElementById("resultCals0").style.display = "inline";
    document.getElementById("resultCalsHalf").style.display = "inline";
    document.getElementById("resultCals1").style.display = "inline";
    document.getElementById("resultCals2").style.display = "inline";
    document.getElementById("resultCalsBMR").innerHTML = (calculateDeficit())[0];
    document.getElementById("resultCals0").innerHTML = (calculateDeficit())[1];
    document.getElementById("resultCalsHalf").innerHTML = (calculateDeficit())[2];
    document.getElementById("resultCals1").innerHTML = (calculateDeficit())[3];
    document.getElementById("resultCals2").innerHTML = (calculateDeficit())[4];

}
//hide the result before values are entered
document.getElementById("container2").style.display = "none";
document.getElementById("result").style.dsiplay = "none";
document.getElementById("resultCalsBMR").style.display = "none";
document.getElementById("resultCals0").style.display = "none";
document.getElementById("resultCalsHalf").style.display = "none";
document.getElementById("resultCals1").style.display = "none";
document.getElementById("resultCals2").style.display = "none";
//call function when button is clicked
document.getElementById("calculate").onclick = function() {
    showDeficit();
  };
