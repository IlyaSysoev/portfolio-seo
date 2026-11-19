document.addEventListener('DOMContentLoaded', () => {
    // Обработка формы обратной связи на странице Контакты
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const userName = document.getElementById('userName').value.trim();

            if (userName) {
                formStatus.textContent = `Спасибо, ${userName}! Ваше сообщение отправлено.`;
                contactForm.reset();
            }
        });
    }
});