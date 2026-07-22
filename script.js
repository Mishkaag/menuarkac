document.addEventListener('DOMContentLoaded', () => {
    // Данные о блюдах с их ценами (в манатах)
    // Теперь это массив объектов, где каждый объект - это категория блюд
    const menuCategories = [
        {
            title: 'ХОЛОДНЫЕ ЗАКУСКИ',
            dishes: [
                { name: 'Мясное ассорти', price: 36, checked: false, half: true },
                { name: 'Суши сет', price: 35, checked: false, half: false },
                { name: 'Мясное ассорти "VIP"', price: 70, checked: false, half: true },
                { name: 'Рыбное ассорти "VIP"', price: 130, checked: false, half: true },
                { name: 'Мясное/Сырное ассорти', price: 60, checked: false, half: true },
                { name: 'Блинчики с красной икрой', price: 56, checked: false, half: true },
                { name: 'Копченое ассорти "VIP"', price: 80, checked: false, half: true },
                { name: 'Волованы с красной икрой', price: 60, checked: false, half: true },
                { name: 'Сырное канапе', price: 55, checked: false, half: true },
                { name: 'Холодец', price: 22, checked: false, half: true },
                { name: 'Сырное ассорти "VIP"', price: 70, checked: false, half: true },
                { name: 'Селедка канапе', price: 30, checked: false, half: true },
                { name: 'Капризе', price: 20, checked: false, half: true },
                { name: 'Селедка с картофелем', price: 24, checked: false, half: true },
                { name: 'Овощное ассорти', price: 10, checked: false, half: false },
                { name: 'Селедка со скумбрией', price: 45, checked: false, half: true },
                { name: 'Овощное ассорти "VIP"', price: 12, checked: false, half: false },
                { name: 'Брускетты микс', price: 24, checked: false, half: true },
                { name: 'Овощи на пару', price: 9, checked: false, half: true },
                { name: 'Тарталетки ассорти', price: 36, checked: false, half: true },
                { name: 'Соленое ассорти', price: 18, checked: false, half: true },
                { name: 'Печеное ассорти', price: 18, checked: false, half: true },
                { name: 'Соленое ассорти "VIP"', price: 20, checked: false, half: true },
                { name: 'Джаджик с мятой', price: 6, checked: false, half: true },
                { name: 'Лимонная закуска', price: 11, checked: false, half: true },
                { name: 'Пишме / Хворост', price: 6, checked: false, half: true },
                { name: 'Лимонная закуска "VIP"', price: 24, checked: false, half: true },
                { name: 'Сухофрукты в мартинице', price: 30, checked: false, half: false },
                { name: 'Помидоры в свекольном соку', price: 10, checked: false, half: true },
                { name: 'Клубника в мартинице', price: 12, checked: false, half: false },
                { name: 'Пикантный баклажан', price: 12, checked: false, half: true },
                { name: 'Ягоды в мартинице', price: 15, checked: false, half: false },
                { name: 'Рулетики микс', price: 10, checked: false, half: true },
                { name: 'Арбуз и дыня в мартинице', price: 6, checked: false, half: false },
                { name: 'Терин из баклажан', price: 14, checked: false, half: true },
                { name: 'Арбуз и дыня нарезка', price: 8, checked: false, half: true },
                { name: 'Фаршированные кабачки', price: 14, checked: false, half: true },
                { name: 'Фрукты в вазе', price: 25, checked: false, half: false },
                { name: 'Сигара борек', price: 12, checked: false, half: true },
                { name: 'Фруктовая нарезка', price: 25, checked: false, half: false },
                { name: 'Осетинская закуска', price: 8, checked: false, half: false },
                { name: 'Фруктовая нарезка "VIP"', price: 40, checked: false, half: false },
                { name: 'Сомса 3 вида', price: 12, checked: false, half: true },
                { name: 'Хлеб (садака)', price: 4, checked: false, half: false },
                { name: 'Сомса 4 вида', price: 14, checked: false, half: true },
                { name: 'Хлеб (банкет)', price: 6, checked: false, half: true },
                { name: 'Мучной сет', price: 32, checked: false, half: true },
                { name: 'Мороженное', price: 15, checked: false, half: false },
                { name: 'Мини фитчи', price: 15, checked: false, half: false },
                { name: 'Глясе', price: 25, checked: false, half: false },
                { name: 'Блинчики ассорти', price: 20, checked: false, half: true },
                { name: 'Лимонады в графине', price: 18, checked: false, half: false },
                { name: 'Нагетсы микс + фри', price: 34, checked: false, half: true },
                { name: 'Напитки ассорти', price: 30, checked: false, half: false },
                { name: 'Куриные ножки + фри', price: 26, checked: false, half: true },
                { name: 'Напитки (безлимит)', price: 40, checked: false, half: false }
            ]
        },
        {
            title: 'САЛАТЫ',
            dishes: [
                { name: 'Оливье', price: 11, checked: false, half: true },
                { name: 'Мужской салат', price: 26, checked: false, half: true },
                { name: 'Оливье с мясом', price: 14, checked: false, half: true },
                { name: 'Мясной в соевом соусе', price: 30, checked: false, half: true },
                { name: 'Винегрет', price: 8, checked: false, half: true },
                { name: 'Теплый с говядиной', price: 24, checked: false, half: true },
                { name: 'Хрустящий баклажан', price: 11, checked: false, half: true },
                { name: 'Салат "Ростбиф"', price: 26, checked: false, half: true },
                { name: 'Салат с ветчиной', price: 12, checked: false, half: true },
                { name: 'Тайский с мясом', price: 24, checked: false, half: true },
                { name: 'Цезарь с курицей', price: 16, checked: false, half: true },
                { name: 'Мясной - пай', price: 24, checked: false, half: true },
                { name: 'Салат с моцареллой', price: 18, checked: false, half: true },
                { name: 'Салат с индейкой и рикоттой', price: 15, checked: false, half: true },
                { name: 'Салат со страчателлой', price: 18, checked: false, half: true },
                { name: 'Салат "Курица Терияки"', price: 16, checked: false, half: true },
                { name: 'Салат "Веддинг"', price: 16, checked: false, half: true },
                { name: 'Китайский с курицей', price: 16, checked: false, half: true },
                { name: 'Салат "Бахар"', price: 20, checked: false, half: true },
                { name: 'Теплый с курицей', price: 16, checked: false, half: true },
                { name: 'Салат "Мини Буратто"', price: 16, checked: false, half: true },
                { name: 'Морковный салат', price: 11, checked: false, half: true },
                { name: 'Греческий салат', price: 11, checked: false, half: true },
                { name: 'Огуречный салат', price: 11, checked: false, half: true },
                { name: 'Салат "Евро-Овощной"', price: 11, checked: false, half: true },
                { name: 'Грибной салат', price: 11, checked: false, half: true },
                { name: 'Микс салат с овощами', price: 14, checked: false, half: true },
                { name: 'Салат "Дымок"', price: 12, checked: false, half: true },
                { name: 'Витаминный салат', price: 11, checked: false, half: true },
                { name: 'Крабовый салат', price: 12, checked: false, half: true },
                { name: 'Свекольный салат', price: 11, checked: false, half: true },
                { name: 'Нисуаз с тунцом"', price: 18, checked: false, half: true },
                { name: 'Салат "Табуле"', price: 10, checked: false, half: true },
                { name: 'Селедка под шубой', price: 20, checked: false, half: true },
                { name: 'Салат "Фантазия"', price: 16, checked: false, half: true }
            ]
        },
        {
            title: 'ГОРЯЧИЕ БЛЮДА',
            dishes: [
                { name: 'Дограма из баранины', price: 45, checked: false, half: false },
                { name: 'Жаркое в горшочке', price: 70, checked: false, half: false },
                { name: 'Ярма из говядины', price: 25, checked: false, half: false },
                { name: 'Биф с картофелем', price: 75, checked: false, half: false },
                { name: 'Плов из говядины', price: 60, checked: false, half: false },
                { name: 'Инджик с диким рисом', price: 80, checked: false, half: false },
                { name: 'Узбекский плов', price: 70, checked: false, half: false },
                { name: 'Медальоны с пюре', price: 100, checked: false, half: false },
                { name: 'Соус из говядины', price: 70, checked: false, half: false },
                { name: 'Медальоны с запеканкой', price: 100, checked: false, half: false },
                { name: 'Нохут чорба из говядины', price: 65, checked: false, half: false },
                { name: 'Осетрина с диким рисом', price: 180, checked: false, half: false },
                { name: 'Нохут чорба с бараниной', price: 65, checked: false, half: false },
                { name: 'Форель с кускусом', price: 180, checked: false, half: false },
                { name: 'Чектирме из баранины', price: 65, checked: false, half: false },
                { name: 'Судак с булгуром', price: 100, checked: false, half: false },
                { name: 'Рисовая каша', price: 15, checked: false, half: false },
                { name: 'Куриный рулет с булгуром', price: 55, checked: false, half: true },
                { name: 'Манты рулет', price: 36, checked: false, half: true },
                { name: 'Жаркое по-домашнему (общая)', price: 65, checked: false, half: true },
                { name: 'Манты с мясом', price: 40, checked: false, half: true },
                { name: 'Тушенное мясо + картофель (общая)', price: 65, checked: false, half: true },
                { name: 'Манты (мясо с тыквой)', price: 36, checked: false, half: true },
                { name: 'Какмач с картофелем (общая)', price: 65, checked: false, half: true },
                { name: 'Манты ассорти 3 вида', price: 24, checked: false, half: true },
                { name: 'Персидский плов (общая)', price: 45, checked: false, half: true },
                { name: 'Долма и голубцы', price: 36, checked: false, half: true },
                { name: 'Бедене с кускусом (общая)', price: 55, checked: false, half: true },
                { name: 'Гутапы с мясом', price: 10, checked: false, half: false },
                { name: 'Каре ягненка с ярмой (общая)', price: 70, checked: false, half: true },
                { name: 'Чебуреки с мясом', price: 10, checked: false, half: false },
                { name: 'Рыба жаренная + овощи (общая)', price: 80, checked: false, half: true },
                { name: 'Узбекская сомса', price: 12, checked: false, half: false },
                { name: 'Рыбный микс "VIP" (общая)', price: 160, checked: false, half: true },
                { name: 'Куриная грудка + ризотто', price: 55, checked: false, half: false },
                { name: 'Куриный микс на доске', price: 60, checked: false, half: true },
                { name: 'Куриная грудка под сыром + рис по-турецки', price: 60, checked: false, half: false },
                { name: 'Мясной микс на доске', price: 110, checked: false, half: true },
                { name: 'Куриное соте + рис по-турецки', price: 55, checked: false, half: false },
                { name: 'Шашлыки 3 вида', price: 90, checked: false, half: true },
                { name: 'Куриное фрикасе с арпой', price: 60, checked: false, half: false },
                { name: 'Шашлыки 4 вида', price: 110, checked: false, half: true },
                { name: 'Куриный рулет с рисом', price: 55, checked: false, half: false },
                { name: 'Мангал микс 5 видов', price: 75, checked: false, half: false },
                { name: 'Курица в соевом соусе + рис по-турецки', price: 60, checked: false, half: false },
                { name: 'Мангал микс "Бахар"', price: 90, checked: false, half: false },
                { name: 'Куриное соте с овощами + булгур', price: 60, checked: false, half: false },
                { name: 'Мангал микс "Аркач"', price: 100, checked: false, half: false }
            ]
        }
    ];
   const menuContainer = document.querySelector('.menu-grid');
    const totalPriceElement = document.querySelector('.total-price');

    // Пересчёт общей суммы
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.menu-item input[type="checkbox"]:checked').forEach(checkbox => {
            const btn = checkbox.closest('.menu-item').querySelector('.half-btn');
            const basePrice = parseFloat(checkbox.dataset.price);
            total += btn && btn.classList.contains('active') ? basePrice / 2 : basePrice;
        });
        totalPriceElement.textContent = `${Math.round(total)} манат`;
    }

    // Создание интерфейса
    menuCategories.forEach(category => {
        const categoryTitle = document.createElement('div');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category.title;
        menuContainer.appendChild(categoryTitle);

        const dishGrid = document.createElement('div');
        dishGrid.classList.add('menu-grid-inner');
        menuContainer.appendChild(dishGrid);

        category.dishes.forEach((dish, index) => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `dish-${category.title.replace(/\s/g, '-')}-${index}`;
            checkbox.dataset.price = dish.price;
            checkbox.checked = dish.checked;

            if (dish.disabled) {
                checkbox.disabled = true;
                }

            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = dish.name;

            if (dish.disabled) {
                checkbox.disabled = true;
                label.title = 'Блюдо временно недоступно';
                }

            // Создаём кнопку только если блюдо поддерживает ½
            let halfBtn = null;
            if (dish.half) {
                halfBtn = document.createElement('button');
                halfBtn.textContent = '0,5';
                halfBtn.classList.add('half-btn');
            }

            // Обработка выбора блюда
            checkbox.addEventListener('change', () => {
                if (checkbox.checked && halfBtn) {
                    halfBtn.style.display = 'inline-block';
                } else if (halfBtn) {
                    halfBtn.style.display = 'none';
                    halfBtn.classList.remove('active');
                }
                updateTotalPrice();
            });

            // Обработка нажатия на кнопку ½
            if (halfBtn) {
                halfBtn.addEventListener('click', () => {
                    halfBtn.classList.toggle('active');
                    updateTotalPrice();
                });
            }

            menuItem.appendChild(checkbox);
            menuItem.appendChild(label);
            if (halfBtn) menuItem.appendChild(halfBtn);
            dishGrid.appendChild(menuItem);
        });
    });

    updateTotalPrice();
});











