var inp_area = document.querySelector(".input_filled");
var button = document.querySelectorAll('button');

for (item of button) {
    item.addEventListener("click", (e) => {
        var buttonText = e.target.innerText;
        if (buttonText == 'AC') {
            inp_area.value = "";
        }
        else if (buttonText == '=') {
            inp_area.value = eval(inp_area.value);
        }
        else {
            inp_area.value = inp_area.value + buttonText;
        }
    });
}