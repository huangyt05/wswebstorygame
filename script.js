let question = document.getElementById("question");
let choices = document.getElementById("choices");

var questionContent = [];
var count = 0;
var answers = [];

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
questionContent.push("Here you go!")

question.innerHTML = questionContent[count];

buttonOne.addEventListener("click", function(){
    count++;
    updateHtml();
    answers.push(buttonOne.innerHTML);
})

buttonTwo.addEventListener("click", function(){
    count++;
    updateHtml();
    answers.push(buttonTwo.innerHTML);
})
function updateHtml(){
    if(count==0){
        buttonOne.innerHTML = "Taco Shell";
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
        buttonOne.innerHTML = "One";
        buttonTwo.innerHTML = "Three";
    }
    if(count==4){
        buttonOne.innerHTML = "Great!";
        buttonTwo.innerHTML = "Make Another One";
    }
    if(count==5){
        buttonOne.innerHTML = "Taco Shell";
        buttonTwo.innerHTML = "Soft Tortilla";
        count = 0;
    }
    question.innerHTML = questionContent[count];
    console.log(answers);
}
