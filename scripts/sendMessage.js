document
    .getElementById('telegramForm')
    .addEventListener('submit', async function (e) {
        e.preventDefault();

        const botToken = '7699405310:AAGwUVyYMZE2Jax9D5KjpQi_yyf_aJ4F0aU';
        const chatId = '674053589';
        const name = document.getElementById('name').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const message = document.getElementById('message').value.trim();

        // Валидация
        if (!name || !contact) {
            openModal(
                'Пожалуйста, заполните обязательные поля: Имя и Контакты'
            );
            return;
        }

        const text = `Новое сообщение с сайта:\n\nИмя: ${name}\nКонтакт: ${contact}\nСообщение: ${
            message || 'Без комментария'
        }`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                }),
            });

            if (response.ok) {
                openModal('Сообщение отправлено! Мы скоро с Вами свяжемся!');
                document.getElementById('telegramForm').reset();
            } else {
                openModal('Ошибка отправки сообщения.');
            }
        } catch (error) {
            openModal('Ошибка отправки сообщения.');
        }
    });

function openModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.innerText = message;
    modal.classList.add('visible');
}

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('modal').classList.remove('visible');
});
