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
        } else if (!Number.isInteger(+size)) {
            alert('Please enter a number');
        } else if (+size < 1 || +size > 100) {
            alert('Your input is lower than 1 or higher than 100');
        } else {
            console.log('clearBox');
        }
    })
}

init();