function init() {
    let size;
    return initGrid(size);
}

function initGrid (size) {
    const adjustBtn = document.querySelector('.adjust-btn');
    adjustBtn.addEventListener('click', () => {
        size = prompt('Set the grid (1-100):');
        let convertSize = +size;
        if (!Number.isInteger(convertSize)) {
            alert('Please enter a number');
        } else if (convertSize < 1 || convertSize > 100) {
            alert('Your input is lower than 1 or higher than 100');
        } else {
            console.log('clearBox');
        };
    })
}

init();