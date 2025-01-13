document.addEventListener('DOMContentLoaded', () => {
    const videoWrappers = document.querySelectorAll('.video__wrapper');

    videoWrappers.forEach((wrapper) => {
        const video = wrapper.querySelector('.areas__video');
        const playPauseButton = wrapper.querySelector('.video__play-pause');
        const volumeSlider = wrapper.querySelector('.video__volume');

        video.volume = volumeSlider.value;
        video.muted = true; // Сначала видео без звука

        // Play/Pause toggle
        playPauseButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPauseButton.textContent = '⏸️'; // Иконка паузы
            } else {
                video.pause();
                playPauseButton.textContent = '⏯️'; // Иконка воспроизведения
            }
        });

        // Volume control
        volumeSlider.addEventListener('input', (e) => {
            video.volume = e.target.value; // Устанавливаем громкость
            video.muted = true; // Включаем звук при взаимодействии с регулятором
        });

        // Снимаем mute при нажатии на play, если пользователь взаимодействует
        // wrapper.addEventListener('mouseenter', () => {
        //     video.muted = false; // Отключаем mute при наведении
        // });

        // Включение цикла воспроизведения
        video.addEventListener('ended', () => {
            video.play(); // Автоматически продолжает воспроизведение
        });
    });
});
