document
    .getElementById('telegramForm')
    .addEventListener('submit', async function (e) {
        e.preventDefault();

        const botToken = '7699405310:AAGwUVyYMZE2Jax9D5KjpQi_yyf_aJ4F0aU';
        const chatId = '674053589';
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const message = document.getElementById('message').value;

        const text = `Новое сообщение с сайта:\n\nИмя: ${name}\nКонтакт: ${contact}\nСообщение: ${message}`;

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
                document.getElementById('result').innerText =
                    'Сообщение отправлено!';
                document.getElementById('telegramForm').reset();
            } else {
                document.getElementById('result').innerText =
                    'Ошибка отправки сообщения.';
            }
        } catch (error) {
            document.getElementById('result').innerText =
                'Ошибка отправки сообщения.';
        }
    });
