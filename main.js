function calculateDelivery() {
    const weight = parseFloat(document.getElementById('weight').value);
    const length = parseFloat(document.getElementById('length').value) / 100; // см в метры
    const width = parseFloat(document.getElementById('width').value) / 100; // см в метры
    const height = parseFloat(document.getElementById('height').value) / 100; // см в метры

    // Скрываем предыдущие сообщения об ошибках
    document.getElementById('errorMessages').classList.add('hidden');
    let errorMessages = [];

    // Валидация вводимых данных
    if (isNaN(weight) || weight <= 0) {
        errorMessages.push("Введите корректный вес (должен быть положительным числом).");
    }
    if (isNaN(length) || length <= 0) {
        errorMessages.push("Введите корректную длину (должна быть положительным числом).");
    }
    if (isNaN(width) || width <= 0) {
        errorMessages.push("Введите корректную ширину (должна быть положительным числом).");
    }
    if (isNaN(height) || height <= 0) {
        errorMessages.push("Введите корректную высоту (должна быть положительным числом).");
    }

    // Если есть ошибки, отображаем их и выходим из функции
    if (errorMessages.length > 0) {
        document.getElementById('errorMessages').innerHTML = errorMessages.join("<br>");
        document.getElementById('errorMessages').classList.remove('hidden');
        document.getElementById('result').classList.add('hidden');
        document.getElementById('contactBtn').classList.add('hidden');
        return;
    }

    // Расчеты
    const volume = length * width * height; // объем в куб.м.
    const volumeCost = volume * 250; // стоимость по объему в долларах
    const weightCost = weight * 2; // стоимость по весу в долларах
    const minCostInDollars = Math.min(volumeCost, weightCost);

    const dollarRate = 70; // 1 доллар = 70 рублей
    const totalCostInRubles = minCostInDollars * dollarRate;

    const chinaDeliveryTime = 7; // Срок доставки из Китая
    const russiaDeliveryTime = 10; // Срок доставки по России
    const totalTime = chinaDeliveryTime + russiaDeliveryTime; // Общий срок

    document.getElementById('cost').innerText = totalCostInRubles.toFixed(2);
    document.getElementById('time').innerText = totalTime;

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('contactBtn').classList.remove('hidden');
}

function resetForm() {
    document.getElementById('deliveryForm').reset();
    document.getElementById('result').classList.add('hidden');
    document.getElementById('contactBtn').classList.add('hidden');
    document.getElementById('errorMessages').classList.add('hidden'); // Скрыть сообщения об ошибках
}

function showContactForm() {
    document.getElementById('contactForm').classList.remove('hidden');
}

function submitContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    // Здесь можно добавить код для отправки данных на сервер
    alert(`Имя: ${name}, Телефон: ${phone}`);
}
