# CALCULATOR

In this project I used HTML, CSS and javascript to make a replica of the popular *Casio fx-82SX* calculator. It has the design and the behaviour as close as to the original for the simplest functions: $*, /, +, -$ and for trigonometric and exponential functions. Buttons on *CA* and *OFF* work properly, reseting the data. And you can use $+/-$ sign to get to change number sign.

DISCLAIMER: Keys such as shift, inverse trigonometric, inverse exponential or memory keys have not been programmed. Screen overflows are not uncommon for very long numbers and are yet to be implemented. Consider this as what it is: a proof of concept and an aproximation, not a perfect replica! Hope you enjoy testing it as much as I enjoyed doing it!

# PROGRAMMING DECISIONS

For each button of this virtual device, there is a diferent `<div></div>` tag. This makes it possible to give each element atributes such as *id*, *class* and *onclick*, to call functions. Mainly I've used *id* and *onclick* HTML attributes in order to make the calculator work with javascript as we interact with the buttons. Class atributes have only been used to give color properties to the calculator.

The most important built-in javascript method I used has probably been `document.getElementById()`, which has served as a bridge to gain access to HTML elements -i.e. calculator buttons- as variables via javascript. Then, I used two attributes of these elements: 
    
* One is the attribute `value`, to access the HTML value attribute of those buttons (numbers, decimal point, and elemental operations in HTML).
* The second one is the attribute `innerHTML`, which would allow a tag such as a `<div><\div>` element to change, for example, to write text on the calculator screen. 

For example, to get the value from within an HTML element -such as a number button or decimal point as is the example here- *into javascript* I did as follows:

https://github.com/blackcub3s/replicacalculadora/blob/0c35aaba891be8476a1440a383f43778422e44f4/script.js#L50
 
Conversely, to get a number *out* from javascript right onto the screen HTML element, as we clicked on the calculator buttons, I did [^2]:

https://github.com/blackcub3s/replicacalculadora/blob/0c35aaba891be8476a1440a383f43778422e44f4/script.js#L104

## Elemental operators

The programming structure I used to make the calculator work as the original Casio device while using the elemental operators $*, /, +, -$ was to store two types information in two different arrays. One is for numbers, `arr_nombres,` and the other is for the elemental operators, `arr_operadors`. But first, whenever we introduce a number it'll be stored in a variable: `window.string_nombre`. Whenever this number is followed by one of the aforementioned simplest operators, the function`posa_operador_basic()` will be invoked and will take the previous number stored in `window.string_nombre` and add it at the end of an array `arr_nombres` and, similarly, will add the operator on an array `arr_operadors` (*both as string variables*).

Soon after that, when the user already wants to get the final result and presses the $ = $ sign, the script does a function call to `calcula_operacio()` which gets to concatenate the numbers in `arr_nombres`and operators in `arr_operators` iteratively and alternatively, to form an expression with the following form, being $A$ as numbers and $\alpha$ as operators we have:

$$ A_1 \alpha_1 A_{2} \cdot \cdot \cdot A_i \alpha_i A_{i+1} \cdot \cdot \cdot A_{n-1} \alpha_{n-1} A_n $$

Then, this expression would be evaluated by the built-in `eval()` javascript function to calculate the final result that will be shown on screen. At the same time, this last result gets stored in the `window.string_nombre` variable to keep being of use in case the user wants to introduce another of the elemental operators to keep calculating, such as it happens in the original Casio model. For example, multiplying 2 by 3, adding seven and pressing equal would translate to `eval(2*3+7)` and be stored as '13' within the `window.string_nombre`variable[^1]. You can see the function here:

https://github.com/blackcub3s/replicacalculadora/blob/2efe2254321d00a8228a87ae5082006a16810abe/script.js#L48-L73

## Complex operators

When it comes down to use trigonometric or exponencial functions, as those functions work with only one input number instead of two, programming approach needs to be different than with the elemental operators. This was done within the function `posa_operador_complex()`: I calibrated trigonometric functions to get the input in degrees instead of radians:

https://github.com/blackcub3s/replicacalculadora/blob/2efe2254321d00a8228a87ae5082006a16810abe/script.js#L76-L104

## Avoiding number screen overflows

I took care of not displaying more than 12 characters on screen when introducing numbers by defining the constant (`const ESPAI_MAXIM_PANTALLA = 12`). This needs to be carefuly considered, as there are two cases:

### CASE A: New number gets introduced by the user

This is the simplest case. It was solved simply by doing:
https://github.com/blackcub3s/replicacalculadora/blob/74160f58510d70ca7539613fd830490e952e04b7/script.js#L29-L35

## CASE B: A number is a result of a computation

The second case, however, is more complex. When the non floating point part of a computation (the whole part or integer part) cannot be represented given the maximun `ESPAI_MAXIM_PANTALLA`, a message need to appear to inform the user: "TOO LONG :)" and the arrays get resetted. On the other hand, if the length of the whole part (in catalan, `longPartEntera`) of the number[^3] is not bigger than 12 characters, then the floating point part needs to be rounded, which is another case scenario. For example, under this circumstance if we have a number like `-123.45` the variable would contain the length 4, as the analyzed substring is this one `-123.` and is obtained doing `cadena.slice(0, cadena.indexOf("."))`. This is taken care of by the following function:

https://github.com/blackcub3s/replicacalculadora/blob/74160f58510d70ca7539613fd830490e952e04b7/script.js#L39





## Changing the sign of a number
This is something that gets implemented in this function (I decided to work all the time with string objects instead of convertim them to integers or floating point numbers):

https://github.com/blackcub3s/replicacalculadora/blob/74160f58510d70ca7539613fd830490e952e04b7/script.js#L12-L26

[^1]: With the list `arr_nombres` being as `['2', '3']` and `arr_operators` as `['*', '+']`, and the last number and operator get added later.

[^2]: I also  made use of `window.VARIABLE`, as a buffer for the last number added.

[^3]: The sign information and decimal point, when they exist, compute within the variable `longPartEntera`.