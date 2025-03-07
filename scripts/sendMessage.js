document
    .getElementById('telegramForm')
    .addEventListener('submit', async function (e) {
        e.preventDefault();

        const botToken = '7084840589:AAFq9P9_5bygSfVtzDhpTr9KPfKoXd4ts7I';
        const chatId = '966614483';
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
    const modalMessage = document.getElementById('modalDynamicContent');
    modalMessage.innerText = message;
    modalMessage.classList.add('white-text');
    modal.classList.add('visible');
}

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('modal').classList.remove('visible');
});

window.addEventListener('click', function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.classList.remove('visible');
    }
});
