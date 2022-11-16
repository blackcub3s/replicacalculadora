# CALCULATOR

In this project I used HTML, CSS and javascript to make a replica of the popular *Casio fx-82SX* calculator. It has the design and the behaviour as close as to the original for the simplest functions: $*, /, +, -$ and for trigonometric and exponential functions. Buttons on *CA* and *OFF* work properly, reseting the data. 

DISCLAIMER: Keys such as shift, inverse trigonometric, inverse exponential or memory keys have not been programmed. Screen overflows are not uncommon for very long numbers. Consider this as what it is: an aproximation, not a perfect replica! Hope you enjoy testing it as much
as I enjoyed doing it!

# PROGRAMMING DECISIONS

For each button there is a diferent `<div></div>` tag. This makes it possible to give the element atrributes such as id, class and onclick functions.

## elemental operators

The programming logic I used to make the calculator work as the original model, in the elemental operators $*, /, +, -$ was to store two arrays of operators. One is `arr_nombres` and the other is `arr_operadors`. But first, whenever we introduce a number it'll be stored in a variable: `window.string_nombre`. Whenever this number is followed by one of the aforementioned simplest operators, the function`posa_operador_basic()` will be invoked and will add the previous number that was stored in `window.string_nombre` to an array `arr_nombres` and the operator on an array `arr_operadors`, both as string variables.

Then, when the user wants the final result and presses the $ \eq $ sign, the function `calcula_operacio()`gets to concatenate the numbers in `arr_nombres`and operators in `arr_operators` alternatively to form an expression of the form 
    $$ A_{i}  $$

 which will be evaluated by the built-in `eval()` javascript function to calculate. Then the result is showed. At the same time, this last value gets stored in the `window.string_nombre` variable to keep being of use in case the user wants to introduce another of the elemental operators. You can see the function here:

https://github.com/blackcub3s/replicacalculadora/blob/2efe2254321d00a8228a87ae5082006a16810abe/script.js#L48-L73

## complex operators

When it comes down to use trigonometric or exponencial functions, as those functions work with only one input number instead of two, programming approach needs to be different than with the elemental operators. This was done within the function `posa_operador_complex()`: I calibrated trigonometric functions to get the input in degrees instead of radians:

https://github.com/blackcub3s/replicacalculadora/blob/2efe2254321d00a8228a87ae5082006a16810abe/script.js#L76-L104