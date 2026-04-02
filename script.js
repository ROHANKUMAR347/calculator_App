let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function Allclear() {
    display.value = ""; // Clears the entire display
}

function del() {
    // Removes the last character from the string in the display
    display.value = display.value.slice(0, -1); 
    // Alternatively, you could use:
    // display.value = display.value.substring(0, display.value.length - 1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
