function init() {
    let size;
    generateBox(16);
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
            clearBox();
            return generateBox(size);
        }
    })
}

function clearBox() {
    const sketchRow = document.querySelectorAll('.sketch-row');
    if (sketchRow) {
        sketchRow.forEach((row) => {
            row.remove();
        })
    }
}

function generateBox(size) {
    const sketchBox = document.querySelector('.sketch-box');
    for (let row = 0; row < size; row++) {
        const sketchRow = document.createElement('div');
        sketchRow.className = 'sketch-row';
        sketchBox.appendChild(sketchRow);
        for (let cell = 0; cell < size; cell++) {
            const sketchCell = document.createElement('div');
            sketchCell.className = 'cell';
            sketchRow.appendChild(sketchCell);
        }
    }
}

function generateColors () {
    let colors = [];
}

init();