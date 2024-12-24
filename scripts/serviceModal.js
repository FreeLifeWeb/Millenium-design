document.addEventListener('DOMContentLoaded', () => {
    function openModal(contentId) {
        const modal = document.getElementById('modal');
        const modalDynamicContent = document.getElementById(
            'modalDynamicContent'
        );

        if (!modal || !modalDynamicContent) {
            console.error('Modal or modalDynamicContent not found in DOM');
            return;
        }

        // Удаляем предыдущий контент
        modalDynamicContent.innerHTML = '';

        // Находим контент по contentId
        const content = document.getElementById(contentId);
        if (!content) {
            console.error(`Content with id "${contentId}" not found`);
            return;
        }

        // Клонируем контент и добавляем в модальное окно
        const clonedContent = content.cloneNode(true);
        clonedContent.classList.remove('hidden-content');
        modalDynamicContent.appendChild(clonedContent);

        // Показываем модальное окно
        modal.classList.add('visible');
    }

    // Обработчик событий для кнопок
    document.addEventListener('click', function (event) {
        if (event.target.id === 'complete1') {
            openModal('complete-content');
        } else if (event.target.id === 'decoration') {
            openModal('decoration-content');
        } else if (event.target.id === 'authors-supervision') {
            openModal('authors-supervision-content');
        } else if (event.target.id === 'production') {
            openModal('production-content');
        }
    });

    // Закрытие модального окна
    document
        .getElementById('closeModal')
        .addEventListener('click', function () {
            document.getElementById('modal').classList.remove('visible');
        });

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', function (event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            modal.classList.remove('visible');
        }
    });
});
