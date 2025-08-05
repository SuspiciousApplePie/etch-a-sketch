# Prompt function.
1. Add event listener to button in adjust-button section.
2. Selecting this button will trigger a prompt.
3. Prompt will what is the side of box.
4. check if box is more than 100, or less than one trigger an alert.
5. if false, return the generateBoxes containing `boxes` variable.

# Init function.
1. create a `let` that takes a number value named `boxes`
2. use `boxes` to prompt parameter.

# generateBox function
1. select the `sketch-box` class.
1. add a `click` event listener to `adjust-btn` class and a function declaration inside it.
    ## function declaration
    1. make a for statement, set a variable called `row` with value of 0, it should not be bigger in the `boxes` value, each iteration should add 1 on row value, label this loop `rowGenerator`
    ### While inside `rowGenerator` loop.
    1. make another loop similar to the previous for loop but name the loop variable `cell` label this `cellGenerator`.
    1. create a div element
    2. set its class to `sketch-row`
    1. append it inside `sketch-box`
        ### while inside `cellGenerator` loop
        1. create a div element
        2. set its class to `cell`
        1. append it inside `sketch-row` element
        3. return to `rowGenerator`

# changeCellColor function
1. select the `main-content` element.
2. add a `mouseover` event listener on it.
3. if the event target class is `cell`
1. get the rgb color using `generateColors` function
4. change the color using `generateColors` attributes, which is rgb.
5. set the opacity of by adding 1.

# generateColor function
1. generate a number using math random, dont exceed to 255 and store to let `red`
2. repeat step and store it to let `green`, and `blue`.
3. return all of it in array format.