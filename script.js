let question = document.getElementById("question");
let choices = document.getElementById("choices");

var questionContent = [];
var count = 0;
var answers = [];
var ans = true;
let buttonOne = document.createElement("BUTTON");
let buttonTwo = document.createElement("BUTTON");

buttonOne.innerHTML = "Taco Shell";
buttonTwo.innerHTML = "Soft Tortilla";

console.log(choices);
choices.appendChild(buttonOne);
choices.appendChild(buttonTwo);

console.log(count);

questionContent.push("What Shell Do You Want?")
questionContent.push("What Protein Do You Want?")
questionContent.push("What Sauce Do You Want?")
questionContent.push("What Greens Do You Want?")
questionContent.push("How many Tacos Do You Want?")

question.innerHTML = questionContent[count];

buttonOne.addEventListener("click", function(){
    answers.push(buttonOne.innerHTML);
    count++;
    updateHtml(); 
})

buttonTwo.addEventListener("click", function(){
    answers.push(buttonTwo.innerHTML);
    count++;
    updateHtml();
    !ans;
})

function updateHtml(){
    if(count==0){
        buttonOne.innerHTML = "Crispy Shell";
        buttonTwo.innerHTML = "Soft Tortilla";
    }
    if(count==1){
        buttonOne.innerHTML = "Shrimp";
        buttonTwo.innerHTML = "Pork";
    }
    if(count==2){
        buttonOne.innerHTML = "Green Sauce";
        buttonTwo.innerHTML = "Spicy Sauce";
    }
    if(count==3){
        buttonOne.innerHTML = "Lettuce";
        buttonTwo.innerHTML = "Onion";
    }
    if(count==4){
        buttonOne.innerHTML = "One";
        buttonTwo.innerHTML = "Three";
    }
    if(count==5){
        buttonOne.innerHTML = "Great!";
        buttonTwo.innerHTML = "Make Another One";
    }
    if(count==6){
        buttonOne.innerHTML = "Taco Shell";
        buttonTwo.innerHTML = "Soft Tortilla Shell";
    }
    if(count!=5){
        question.innerHTML = questionContent[count];
    }
    else if(count==5){
        question.innerHTML = `Enjoy Your ${answers[0]} ${answers[1]} Taco with ${answers[3]} and ${answers[2]}`;
        answers.length=0;
        count = 0;
    }

    console.log(answers);
}
