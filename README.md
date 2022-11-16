# CALCULATOR

In this project I used HTML, CSS and javascript to make a replica of the popular *Casio fx-82SX* calculator. It has the design and the behaviour as close as to the original for the simplest functions: $*, /, +, -$ and for trigonometric and exponential functions. Buttons on *CA* and *OFF* work properly, reseting the data. 

DISCLAIMER: Keys such as shift, inverse trigonometric, inverse exponential or memory keys have not been programmed. Screen overflows are not uncommon for very long numbers. Consider this as what it is: an aproximation, not a perfect replica! Hope you enjoy testing it as much
as I enjoyed doing it!

# PROGRAMMING DECISIONS

For each button there is a diferent `<div></div>` tag. This makes it possible to give the element atrributes such as id, class and onclick functions.

## elemental operators

The programming logic I used to make the calculator work as the original model, in the simplest operators $*, /, +, -$ was to store two arrays of operators. One is `arr_nombres` and the other is `arr_operadors`. Whenever we introduce a number in the calculator followed by one of the simplest operators, the function `calcula_operacio()` will store them in those arrays, as string variables. When the user wants the result and presses the $ \eq $ sign, then the function gets to concatenate the numbers and operators alternatively and with the expression `eval()` function of javascript just creates a result and stores it in the `window.string_nombre` variable to keep being of use in the next operations. You can see the function here:

https://github.com/blackcub3s/replicacalculadora/blob/05ed99c81c0f44676304558ee4f85ded1bd70468/script.js#L45-L73

## complex operators

When it comes dowm to use trigonometric or exponencial functions, as those functions work with only one input number instead of two, programming had to be different. This was done within the function `posa_operador_complex()`. I calibrated trigonometric functions to get the input in degrees instead of radians:

https://github.com/blackcub3s/replicacalculadora/blob/05ed99c81c0f44676304558ee4f85ded1bd70468/script.js#L76-L93