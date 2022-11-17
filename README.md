# CALCULATOR

In this project I used HTML, CSS and javascript to make a replica of the popular *Casio fx-82SX* calculator. It has the design and the behaviour as close as to the original for the simplest functions: $*, /, +, -$ and for trigonometric and exponential functions. Buttons on *CA* and *OFF* work properly, reseting the data. 

DISCLAIMER: Keys such as shift, inverse trigonometric, inverse exponential or memory keys have not been programmed. Screen overflows are not uncommon for very long numbers and are yet to be implemented. Consider this as what it is: a proof of concept and an aproximation, not a perfect replica! Hope you enjoy testing it as much as I enjoyed doing it!

# PROGRAMMING DECISIONS

For each button of this vitual device, there is a diferent `<div></div>` tag. This makes it possible to give the element tag atributes such as *id*, *class* and *onclick*, to call functions. Mainly I've used id and onclick attributes for making the calculator work with javascript. Class atributes have been reserved to give color properties to the calculator.

The most important built in javascript method I used was probably `document.getElementById();` in order to get the HTML elements (the buttons from the calculator). Then I used the attribute `value` to access the value attribute of those buttons (which were numbers, and operation values in HTML); and also the attribute `innerHTML` which would allow a tag such as a `<div><\div>` element to change, for example, to write text on the screen `<div></div>`. Also made use of `window.VARIABLE`, as a buffer for the last number added.

Namely in the code, to print the number as we clicked on the calculator buttons:

https://github.com/blackcub3s/replicacalculadora/blob/0c35aaba891be8476a1440a383f43778422e44f4/script.js#L104

And, to get the value of a calculator clicked number or decimal point (here, the latter) in I would do as follows:

https://github.com/blackcub3s/replicacalculadora/blob/0c35aaba891be8476a1440a383f43778422e44f4/script.js#L50


## elemental operators

The programming structure I used to make the calculator work as the original Casio device while using the elemental operators $*, /, +, -$ was to store two information in two different arrays. One is for numbers, `arr_nombres,` and the other is for the elemental operators, `arr_operadors`. But first, whenever we introduce a number it'll be stored in a variable: `window.string_nombre`. Whenever this number is followed by one of the aforementioned simplest operators, the function`posa_operador_basic()` will be invoked and will take the previous number stored in `window.string_nombre` and add it at the end of an array `arr_nombres` and, similarly, will add the operator on an array `arr_operadors`, *both as string variables*.

Soon after that, when the user already wants to get the final result and presses the $ = $ sign, the script does a function call to `calcula_operacio()` which gets to concatenate the numbers in `arr_nombres`and operators in `arr_operators` iteratively and alternatively, to form an expression of $A$ as numbers and $\alpha$ as operators with the following form: 

$$ A_1 \alpha_1 A_{2} \cdot \cdot \cdot A_i \alpha_i A_{i+1} \cdot \cdot \cdot A_{n-1} \alpha_{n-1} A_n $$

This expression then would be evaluated by the built-in `eval()` javascript function to calculate the final result that will be shown on screen. At the same time, this last result gets stored in the `window.string_nombre` variable to keep being of use in case the user wants to introduce another of the elemental operators to keep calculating, such as the original model. For example, multiplying 2 by 3, adding seven and pressing equal would translate to `eval(2*3+7)` and be stored as '13' within the `window.string_nombre`variable[^1]. You can see the function here:

https://github.com/blackcub3s/replicacalculadora/blob/2efe2254321d00a8228a87ae5082006a16810abe/script.js#L48-L73

## complex operators

When it comes down to use trigonometric or exponencial functions, as those functions work with only one input number instead of two, programming approach needs to be different than with the elemental operators. This was done within the function `posa_operador_complex()`: I calibrated trigonometric functions to get the input in degrees instead of radians:

https://github.com/blackcub3s/replicacalculadora/blob/2efe2254321d00a8228a87ae5082006a16810abe/script.js#L76-L104

[^1] With the list `arr_nombres` being as `['2', '3']` and `arr_operators` as `['*', '+']`, and the last number and operator get added later.