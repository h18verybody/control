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
        instructions: "Запеките рыбу с лимоном и специями в духовке.Запеките рыбу с лимоном и специями в духовке.Запеките рыбу с лимоном и специями в духовке.Запеките рыбу с лимоном и специями в духовке.Запеките рыбу с лимоном и специями в духовке.Запеките рыбу с лимоном и специями в духовке.Запеките рыбу с лимоном и специями в духовке."
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
    }
];

document.getElementById("ingredient-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    searchRecipes();
});

function searchRecipes() {
    const ingredientsArray = Array.from(document.querySelectorAll('.ingredient-button')).map(button => button.innerText.toLowerCase());
    const recipeCards = document.getElementById("recipe-cards");
    
    recipeCards.innerHTML = '';

    const filteredRecipes = recipes.map((recipe, index) => {
        const matches = ingredientsArray.filter(ingredient => recipe.ingredients.includes(ingredient)).length;
        return { recipe, matches, index }; 
    }).filter(item => item.matches > 0); 

    filteredRecipes.sort((a, b) => b.matches - a.matches);

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(item => {
            const recipe = item.recipe;
            const index = item.index; 
            const card = document.createElement("div");
            card.className = `recipe-card col-md-5 bg_image_${index}`; 
            card.innerHTML = `
                <h2>${recipe.title}</h2>
                <p><strong>Ингредиенты: ${recipe.ingredients.join(', ')}</strong></p>
                <p><strong>Инструкции: ${recipe.instructions}</strong></p>
            `;
            
            card.addEventListener("click", function() {
                document.getElementById("recipeDetailModalLabel").innerText = recipe.title;
                document.getElementById("recipe-detail-ingredients").innerText = `Ингредиенты: ${recipe.ingredients.join(', ')}`;
                document.getElementById("recipe-detail-instructions").innerText = `Инструкции: ${recipe.instructions}`;
                
                const modal = new bootstrap.Modal(document.getElementById('recipeDetailModal'));
                modal.show();
            });

            recipeCards.appendChild(card);
        });
    } else {
        recipeCards.innerHTML = '<p>Рецепты не найдены.</p>';
    }
}

const ingredientInput = document.getElementById("ingredient-input");
const buttonContainer = document.getElementById("button-container");

const addedIngredients = []; 

ingredientInput.addEventListener("keyup", function (event) {
    const value = ingredientInput.value.trim();

    if (event.key === "Enter") {
        addIngredient(value);
    }

    if (event.key === " ") {
        addIngredient(value);
        ingredientInput.value = ''; 
    }

    if (value.split(' ').length === 1 && value.length > 0) {
        searchRecipes();
    }
});

function addIngredient(value) {
    const ingredients = value.split(' ').filter(ingredient => ingredient);

    ingredients.forEach(ingredient => {
        if (!addedIngredients.includes(ingredient)) {
            addedIngredients.push(ingredient);

            const buttonWrapper = document.createElement("div");
            buttonWrapper.className = "position-relative d-inline-block me-2 mb-2";

            const button = document.createElement("button");
            button.className = "ingredient-button btn btn-secondary";
            button.innerText = ingredient;

            const removeButton = document.createElement("span");
            removeButton.innerHTML = '&times;';
            removeButton.className = "position-absolute top-0 end-0 translate-middle bg-danger text-white rounded-circle" +
                " d-flex justify-content-center align-items-center" +
                " cursor-pointer";
            removeButton.style.width = "20px";
            removeButton.style.height = "20px";
            removeButton.style.cursor = "pointer";
            removeButton.style.fontSize = "16px";
            removeButton.style.padding = "0";
            removeButton.style.display = "none";

            buttonWrapper.addEventListener("mouseenter", () => {
                removeButton.style.display = "block";
            });
            buttonWrapper.addEventListener("mouseleave", () => {
                removeButton.style.display = "none";
            });

            removeButton.addEventListener("click", () => {
                buttonWrapper.remove();
                addedIngredients.splice(addedIngredients.indexOf(ingredient), 1);
                searchRecipes();
            });

            buttonWrapper.appendChild(button);
            buttonWrapper.appendChild(removeButton);
            buttonContainer.appendChild(buttonWrapper);
        }
    });
}