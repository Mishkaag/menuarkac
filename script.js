document.addEventListener('DOMContentLoaded', () => {
    // Данные о блюдах с их ценами (в манатах)
    // Теперь это массив объектов, где каждый объект - это категория блюд
    const menuCategories = [
        {
            title: 'ХОЛОДНЫЕ ЗАКУСКИ',
            dishes: [
                { name: 'Мясное ассорти', price: 35, checked: false },
                { name: 'Суши сет', price: 35, checked: false },
                { name: 'Мясное ассорти "VIP"', price: 65, checked: false },
                { name: 'Рыбное ассорти "VIP"', price: 130, checked: false },
                { name: 'Мясное/Сырное ассорти', price: 60, checked: false },
                { name: 'Блинчики с красной икрой', price: 65, checked: false },
                { name: 'Копченое ассорти "VIP"', price: 70, checked: false },
                { name: 'Волованы с красной икрой', price: 65, checked: false },
                { name: 'Сырное канапе', price: 55, checked: false },
                { name: 'Холодец', price: 15, checked: false },
                { name: 'Сырное ассорти "VIP"', price: 70, checked: false },
                { name: 'Селедка канапе', price: 28, checked: false },
                { name: 'Капризе', price: 28, checked: false },
                { name: 'Селедка с картофелем', price: 24, checked: false },
                { name: 'Овощное ассорти', price: 9, checked: false },
                { name: 'Селедка со скумбрией', price: 42, checked: false },
                { name: 'Овощное ассорти "VIP"', price: 12, checked: false },
                { name: 'Брускетты микс', price: 24, checked: false },
                { name: 'Овощи на пару', price: 9, checked: false },
                { name: 'Тарталетки ассорти', price: 30, checked: false },
                { name: 'Соленое ассорти', price: 18, checked: false },
                { name: 'Печеное ассорти', price: 18, checked: false },
                { name: 'Соленое ассорти "VIP"', price: 20, checked: false },
                { name: 'Джаджик с мятой', price: 6, checked: false },
                { name: 'Лимонная закуска', price: 11, checked: false },
                { name: 'Пишме / Хворост', price: 6, checked: false },
                { name: 'Лимонная закуска "VIP"', price: 24, checked: false },
                { name: 'Сухофрукты в мартинице', price: 35, checked: false },
                { name: 'Помидоры в свекольном соку', price: 10, checked: false },
                { name: 'Клубника в мартинице (по сезону)', price: 11, checked: false },
                { name: 'Пикантный баклажан', price: 12, checked: false },
                { name: 'Ягоды в мартинице (по сезону)', price: 18, checked: false },
                { name: 'Рулетики микс', price: 12, checked: false },
                { name: 'Арбуз и дыня в мартинице (по сезону)', price: 8, checked: false },
                { name: 'Терин из баклажан', price: 14, checked: false },
                { name: 'Арбуз и дыня нарезка (по сезону)', price: 8, checked: false },
                { name: 'Фаршированные кабачки', price: 16, checked: false },
                { name: 'Фрукты в вазе', price: 20, checked: false },
                { name: 'Сигара борек', price: 12, checked: false },
                { name: 'Фруктовая нарезка', price: 25, checked: false },
                { name: 'Осетинская закуска', price: 10, checked: false },
                { name: 'Фруктовая нарезка "VIP"', price: 45, checked: false },
                { name: 'Этли чорек', price: 12, checked: false },
                { name: 'Хлеб (садака)', price: 4, checked: false },
                { name: 'Сомса 3 вида', price: 10, checked: false },
                { name: 'Хлеб (банкет)', price: 6, checked: false },
                { name: 'Сомса 4 вида', price: 12, checked: false },
                { name: 'Мороженное', price: 15, checked: false },
                { name: 'Мучной сет', price: 20, checked: false },
                { name: 'Глясе', price: 25, checked: false },
                { name: 'Мини фитчи', price: 10, checked: false },
                { name: 'Лимонады в графине', price: 18, checked: false },
                { name: 'Блинчики ассорти', price: 16, checked: false },
                { name: 'Напитки ассорти', price: 25, checked: false },
                { name: 'Нагетсы микс + фри', price: 36, checked: false },
                { name: 'Напитки ассорти', price: 35, checked: false },
                { name: 'Куриные ножки + фри', price: 26, checked: false }
            ]
        },
        {
            title: 'САЛАТЫ',
            dishes: [
                { name: 'Оливье', price: 11, checked: false },
                { name: 'Мужской салат', price: 22, checked: false },
                { name: 'Винегрет', price: 7, checked: false },
                { name: 'Мясной в соевом соусе', price: 24, checked: false },
                { name: 'Хрустящий баклажан', price: 10, checked: false },
                { name: 'Теплый с говядиной', price: 18, checked: false },
                { name: 'Салат с копченой ветчиной', price: 14, checked: false },
                { name: 'Салат с ростбифом', price: 22, checked: false },
                { name: 'Цезарь с курицей', price: 17, checked: false },
                { name: 'Тайский с мясом', price: 20, checked: false },
                { name: 'Салат с сыром Моцарелла', price: 18, checked: false },
                { name: 'Мясной - пай', price: 22, checked: false },
                { name: 'Салат с сыром Страчателла', price: 18, checked: false },
                { name: 'Салат с индейкой и рикоттой', price: 15, checked: false },
                { name: 'Салат "Веддинг"', price: 16, checked: false },
                { name: 'Курица Терияки', price: 15, checked: false },
                { name: 'Салат "Бахар"', price: 22, checked: false },
                { name: 'Китайский с курицей', price: 15, checked: false },
                { name: 'Салат "Мини Буратто"', price: 16, checked: false },
                { name: 'Теплый с курицей', price: 14, checked: false },
                { name: 'Греческий салат', price: 11, checked: false },
                { name: 'Морковный салат', price: 10, checked: false },
                { name: 'Салат "Евро-Овощной"', price: 10, checked: false },
                { name: 'Огуречный салат', price: 11, checked: false },
                { name: 'Микс с овощами', price: 14, checked: false },
                { name: 'Грибной салат', price: 12, checked: false },
                { name: 'Витаминный салат', price: 10, checked: false },
                { name: 'Салат "Дымок"', price: 13, checked: false },
                { name: 'Свекольный салат', price: 11, checked: false },
                { name: 'Крабовый салат', price: 12, checked: false },
                { name: 'Салат "Табуле"', price: 7, checked: false },
                { name: 'Нисуаз с тунцом"', price: 22, checked: false },
                { name: 'Салат "Фантазия"', price: 16, checked: false },
                { name: 'Селедка под шубой', price: 19, checked: false }
            ]
        },
        {
            title: 'ГОРЯЧИЕ БЛЮДА',
            dishes: [
                { name: 'Плов из говядины', price: 33, checked: false },
                { name: 'Кур.соте с овощами (общая)', price: 35, checked: false },
                { name: 'Плов (мясо от заказчика)', price: 15, checked: false },
                { name: 'Кур.ножки + рис (общая)', price: 30, checked: false },
                { name: 'Ярма с бараниной', price: 12, checked: false },
                { name: 'Курица в слив.соусе + рис (общая)', price: 40, checked: false },
                { name: 'Ярма (мясо от заказчика)', price: 10, checked: false },
                { name: 'Жаркое в горшочке', price: 45, checked: false },
                { name: 'Дограма с бараниной', price: 30, checked: false },
                { name: 'Жаркое с овощами (общая)', price: 50, checked: false },
                { name: 'Дограма (мясо от заказчика)', price: 15, checked: false },
                { name: 'Жаркое + картофель (общая)', price: 50, checked: false },
                { name: 'Нохут чорба с говядиной', price: 35, checked: false },
                { name: 'Бахар микс (общая)', price: 55, checked: false },
                { name: 'Нохут чорба (мясо от заказчика)', price: 15, checked: false },
                { name: 'Голень ягненка + булгур', price: 55, checked: false },
                { name: 'Соус с говядиной', price: 35, checked: false },
                { name: 'Голень ягненка + булгур (общая)', price: 55, checked: false },
                { name: 'Рисовая каша', price: 15, checked: false },
                { name: 'Медальоны + овощи (общая)', price: 60, checked: false },
                { name: 'Долма + голубцы (общая)', price: 24, checked: false },
                { name: 'Бараньи рёбра + баклажаны (общая)', price: 55, checked: false },
                { name: 'Манты с фаршем', price: 22, checked: false },
                { name: 'Говяжий рулет + овощи (общая)', price: 55, checked: false },
                { name: 'Манты (фарш с тыквой)', price: 22, checked: false },
                { name: 'Бараний рулет + картофель (общая)', price: 60, checked: false },
                { name: 'Манты с нарезным мясом', price: 22, checked: false },
                { name: 'Персидский плов (общая)', price: 40, checked: false },
                { name: 'Манты ассорти 3 вида', price: 18, checked: false },
                { name: 'Кебаб микс (общее)', price: 35, checked: false },
                { name: 'Чебуреки с мясом', price: 8, checked: false },
                { name: 'Чоп-чиш шашлыки', price: 60, checked: false },
                { name: 'Куриный рулет + рис', price: 40, checked: false },
                { name: 'Шашлыки 3 вида', price: 55, checked: false },
                { name: 'Куриный рулет + рис (общая)', price: 40, checked: false },
                { name: 'Шашлыки 4 вида', price: 70, checked: false },
                { name: 'Куриная грудка + рис', price: 40, checked: false },
                { name: 'Шашлыки 5 видов', price: 80, checked: false },
                { name: 'Куриное соте с овошами', price: 35, checked: false },
                { name: 'Мангал микс "Бахар"', price: 90, checked: false }
            ]
        }
    ];
    const menuContainer = document.querySelector('.menu-grid'); // Переименовал, чтобы было яснее
    const totalPriceElement = document.querySelector('.total-price');

    // Функция для обновления общей суммы
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.menu-item input[type="checkbox"]:checked').forEach(checkbox => {
            total += parseFloat(checkbox.dataset.price || 0);
        });
        totalPriceElement.textContent = `${total} манат`;
    }

    // Создание элементов меню на основе данных
    menuCategories.forEach(category => {
        // Создаем заголовок категории
        const categoryTitle = document.createElement('div');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category.title;
        menuContainer.appendChild(categoryTitle);

        // Создаем сетку для блюд в этой категории
        const dishGrid = document.createElement('div');
        dishGrid.classList.add('menu-grid-inner'); // Новый класс для внутренней сетки
        menuContainer.appendChild(dishGrid);

        category.dishes.forEach((dish, index) => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            // Используем уникальный ID, комбинируя название категории и индекс
            checkbox.id = `dish-${category.title.replace(/\s/g, '-')}-${index}`;
            checkbox.checked = dish.checked;
            checkbox.dataset.price = dish.price;

            const label = document.createElement('label');
            label.htmlFor = checkbox.id; // Связываем label с checkbox по ID
            label.textContent = dish.name;

            menuItem.appendChild(checkbox);
            menuItem.appendChild(label);
            dishGrid.appendChild(menuItem); // Добавляем в внутреннюю сетку

            checkbox.addEventListener('change', updateTotalPrice);
        });
    });

    // Изначально обновляем сумму при загрузке страницы
    updateTotalPrice();
});

