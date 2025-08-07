function init() {
    let size;
    return initGrid(size);
}

function initGrid (size) {
    const adjustBtn = document.querySelector('.adjust-btn');
    adjustBtn.addEventListener('click', () => {
        size = prompt('Set the grid (1-100):');
        if (size === null) {
            return;
        } else if (size.length === 0) {
            alert('Empty input');
        } else if (!Number.isInteger(Number(size))) {
            alert('Please enter a whole number');
        } else if (Number(size) < 1 || Number(size) > 100) {
            alert('Your input is lower than 1 or higher than 100');
        } else {
            return generateBox(size);
        }
    })
}

function generateBox(size) {
    const sketchBox = document.querySelector('.sketch-box');
    for (let row = 0; row < size; row++) {
        console.log(`row: ${row}`);
        const sketchRow = document.createElement('div');
        sketchRow.className = 'sketch-row';
        console.log(sketchRow);
        sketchBox.appendChild(sketchRow);
        // for (let cell = 0; cell < size; cell++) {
        //     console.log(`cell; ${cell}`)
        // }
    }
}

init();