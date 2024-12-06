const slider = document.querySelector('.slider');
const afterImage = document.querySelector('.after');
const divider = document.querySelector('.divider');
const handle = document.querySelector('.handle');

let isDragging = false;

// Функция для обновления положения шторки
function updateSliderPosition(x) {
    const rect = slider.getBoundingClientRect();
    const position = Math.max(0, Math.min(x - rect.left, rect.width));
    const percentage = (position / rect.width) * 100;

    afterImage.style.width = `${percentage}%`;
    divider.style.left = `${percentage}%`;
}

// Обработчики событий мыши
divider.addEventListener('mousedown', (e) => {
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        updateSliderPosition(e.clientX);
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Обработчики событий касания
divider.addEventListener('touchstart', (e) => {
    isDragging = true;
});

document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        const touch = e.touches[0];
        updateSliderPosition(touch.clientX);
    }
});

document.addEventListener('touchend', () => {
    isDragging = false;
});
