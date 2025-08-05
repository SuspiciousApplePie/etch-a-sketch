# setBoxValue function.
1. Add event listener to button in adjust-button section.
1. Selecting this button will trigger a prompt.
1. Prompt will ask whats the size of the box store it on `boxes`
1. check if input is more than 100, or less than one trigger an alert.
1. check if input is not number and trigger an alert.
1. if false:
    1. call clearBox
    1. pass the boxes to `generateBox`

# Init function.
1. create a `let` that takes a number value named `boxes`
1. use `boxes` to `setBoxValue` parameter.

# generateBox function
1. make a for statement, set a variable called `row` with value of 0, it should not be bigger in the `boxes` value, each iteration should add 1 on row value, label this loop `rowGenerator`
    ### While inside `rowGenerator` loop.
    1. make another loop similar to the previous for loop but name the loop variable `cell` label this `cellGenerator`.
    1. create a div element
    1. set its class to `sketch-row`
    1. append it inside `sketch-box`
        ### while inside `cellGenerator` loop
        1. create a div element
        1. set its class to `cell`
        1. append it inside `sketch-row` element
        1. return to `rowGenerator`

# changeCellColor function
1. select the `sketch-box` element.
1. add a `mouseover` event listener on it.
1. if the event target class is `cell`
1. get the rgb color using `generateColors` function
1. change the color using `generateColors` attributes, which is rgb.
1. set the opacity of by adding 1.

# generateColor function
1. generate a number using math random, dont exceed to 255 and store to let `red`
1. repeat step and store it to let `green`, and `blue`.
1. return all of it in array format.

# clearBox functon
1. select all `sketch-row` element
1. if any exists
    1. loop through each
    1. remove each of it