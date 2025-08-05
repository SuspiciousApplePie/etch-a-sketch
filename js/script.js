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
            alert('Please enter a number')
        };
    })
}

init();