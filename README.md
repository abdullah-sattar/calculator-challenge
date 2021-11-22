<h1>JavaScript Calculator</h1>

This is a simple calculator that can perform basic operator functions.

##Technologies

HTML 
CSS
SCSS
JavaScript

##How it works

The numbers display works through the DOM interface. The number buttons are targeted with the JavaScript querySelector, and a click event triggers a for loop and innerHTML function which display the selected buttons on screen.

When an operator button is clicked, a click event triggers a push method which sends the displayed numbers to a defined array. After the user selects a second set of numbers, clicking the equals button triggers another push method which sends this second set of numbers to the defined array. Following this, an if and else if statement determines which operator was selected and performs the appropriate calculation displaying the result on screen.

The C button empties the array via a click event. The % button performs a simple function that divides the displayed value by 100. The -/+ buttons adds a "-" sign at the front of the displayed value. 



