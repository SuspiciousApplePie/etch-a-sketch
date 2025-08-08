# initGrid function.
1. create a `let` that takes a number value named `size`
1. Prompt will ask whats the size of the box store it on `size`
1. check if input is more than 100, or less than one trigger an alert.
1. check if input is not number and trigger an alert.
1. if false:
    1. call `clearBox()`
    1. pass the size to `generateBox()`

# init function.
1. Add event listener to button in adjust-button section.
1. Selecting this button will trigger a `initGrid()`.
1. select the `sketch-box` element within the `.main-content` element.
1. add a `mouseover` event listener on it.
1. call `generateBox()` no parameter.

# generateBox function
1. select the `sketch-box` class within the .main-content element.
1. create a for loop (`rowGenerator`) with a variable `row` with a value starting 0, while it is less than `size`
    ### In each iteration of `rowGenerator`
    1. create a div element
    1. set its class to `sketch-row`
    1. append it inside `sketch-box`
    1. create a for loop (`cellGenerator`) with a variable `cell` with a value starting 0, while it is less than `size`
        ### in each iteration of `cellGenerator`
        1. create a div element
        1. set its class to `cell`
        1. append it to `sketch-row`

# changeCellColor function
1. if the event target class contains `.cell`
    1. get the rgb color using `generateColors` function
    1. change the backgroundColor using `generateColors` that is converted to string.
    1. if there is no opacity value
        1. set the opacity value to 0.1
    1. else if value of `Number` converted opacity value is less than 1.0
        1. add 0.1 on opacity value 

# generateColor function
1. create an empty of `colors`
1. generate a number using math random thrice using for loop
    1. on each loop assign the generated number to `colors`
1. return colors

# clearBox functon
1. select all `sketch-row` element
1. if any exists
    1. loop through each
    1. remove each of it

# Tech Stack:
Front-end:
 - HTML (UI)
 - CSS (UI)
 - JavaScript (Interactivity)