
let hiring = document.querySelector("#contact-hiring");
let radio = document.querySelector("input.radio");
let div = document.querySelector("#add");

hiring.addEventListener("click", function () {
    
    let label = document.createElement("label");
    let input = document.createElement("input");
    div.appendChild(label); // insert the label in the div of the fieldset
    div.appendChild(input); // insert the input in the dive of the fieldset
    label.for="contact-wage";
    label.innerHTML = "Hourly rate";
    input.id = "contact-wage";
    input.name="wage"
    input.placeholder="$";
    input.size="5";
    input.type="text";
}), { once : true};
