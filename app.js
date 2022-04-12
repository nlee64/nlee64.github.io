// declare variables for the each radio buttons
let hiring = document.querySelector("#contact-hiring");
let question = document.querySelector("#contact-question");
let comment = document.querySelector("#contact-comment");
let div = document.querySelector("#add");

hiring.addEventListener("click", function () {
    div.innerHTML=""; // enable to add the hourly only once
    let label = document.createElement("label");
    let input = document.createElement("input");
    div.appendChild(label); // insert the label in the div of the fieldset
    div.appendChild(input); // insert the input in the dive of the fieldset
    label.for="contact-wage";
    label.innerHTML = "Hourly rate";
    input.id = "contact-wage";
    input.name="wage"
    input.placeholder="CAD";
    input.size="5";
    input.type="number";
});

// delete the wage text input if another radio is selected
question.addEventListener("click", function (){
    div.innerHTML="";
});
comment.addEventListener("click", function (){
    div.innerHTML="";
});



