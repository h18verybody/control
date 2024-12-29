const recipes = [
    {
        title: "Салат Цезарь",
        ingredients: ["курица", "салат", "пармезан", "гренки", "соус"],
        instructions: "Обжарьте курицу, нарежьте салат и смешайте все ингредиенты."
    },
    {
        title: "Паста с томатным соусом",
        ingredients: ["паста", "томат", "чеснок", "базилик"],
        instructions: "Отварите пасту, обжарьте чеснок и добавьте томаты."
    },
    {
        title: "Омлет",
        ingredients: ["яйца", "молоко", "соль", "перец"],
        instructions: "Взбейте яйца с молоком и обжарьте на сковороде."
    },
    {
        title: "Чаша с киноа",
        ingredients: ["киноа", "авокадо", "огурец", "помидоры"],
        instructions: "Сварите киноа и смешайте с нарезанными овощами."
    },
    {
        title: "Куриный суп",
        ingredients: ["курица", "морковь", "лук", "специи"],
        instructions: "Сварите курицу с овощами и специями."
    },
    {
        title: "Блины",
        ingredients: ["мука", "яйца", "молоко", "сахар"],
        instructions: "Смешайте все ингредиенты и жарьте на сковороде."
    },
    {
        title: "Творожная запеканка",
        ingredients: ["творог", "яйца", "сахар", "мука"],
        instructions: "Смешайте все ингредиенты и запекайте в духовке."
    },
    {
        title: "Кекс",
        ingredients: ["мука", "яйца", "масло", "сахар"],
        instructions: "Смешайте все ингредиенты и выпекайте в духовке."
    },
    {
        title: "Ризотто",
        ingredients: ["рис", "бульон", "пармезан", "грибы"],
        instructions: "Постепенно добавляйте бульон к рису, помешивая."
    },
    {
        title: "Запеченная рыба",
        ingredients: ["рыба", "лимон", "специи"],
        instructions: "Запеките рыбу с лимоном и специями в духовке."
    },
    {
        title: "Фруктовый салат",
        ingredients: ["фрукты", "мед", "лимон"],
        instructions: "Нарежьте фрукты и полейте медом с лимоном."
    },
    {
        title: "Гречка с овощами",
        ingredients: ["гречка", "морковь", "лук", "перец"],
        instructions: "Сварите гречку и обжарьте с овощами."
    },
    {
        title: "Шоколадный торт",
        ingredients: ["мука", "какао", "сахар", "яйца"],
        instructions: "Смешайте все ингредиенты и выпекайте в духовке."
    },
    {
        title: "Картофельное пюре",
        ingredients: ["картофель", "молоко", "масло", "соль"],
        instructions: "Отварите картофель, разомните и добавьте молоко и масло."
    },
];

const recipeContainer = document.getElementById('recipe-container');
const recipeDetailContainer = document.getElementById('recipe-detail-container');

recipes.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.className = `card bg_image_${index}`;

    const title = document.createElement('h2');
    title.textContent = recipe.title;
    card.appendChild(title);

    const ingredients = document.createElement('p');
    ingredients.textContent = `Ингредиенты: ${recipe.ingredients.join(', ')}`;
    card.appendChild(ingredients);

    const instructions = document.createElement('p');
    instructions.textContent = `Приготовление: ${recipe.instructions}`;
    card.appendChild(instructions);

    card.addEventListener('click', () => {
        document.getElementById("recipeDetailModalLabel").innerText = recipe.title;
        document.getElementById("recipe-detail-ingredients").innerText = `Ингредиенты: ${recipe.ingredients.join(', ')}`;
        document.getElementById("recipe-detail-instructions").innerText = `Приготовление: ${recipe.instructions}`;
        
        const modal = new bootstrap.Modal(document.getElementById('recipeDetailModal'));
        modal.show();
    });

    recipeContainer.appendChild(card);
});

function closeRecipeDetail() {
    recipeDetailContainer.style.display = 'none'; 
}

