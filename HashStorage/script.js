import {HeshStorage} from '/HeshStorage.js'
let coctailStorage = new HeshStorage;
function addCoctail(name, ingredient, recipe){
    let coctailDescription = {};
    coctailDescription.coctailIngredient = ingredient;
    coctailDescription.coctailRecipe = recipe;
    coctailStorage.addValue(name, coctailDescription);
}
addCoctail('Маргарита', `Водка Finlandia 50мл Кофейный ликер 25мл Лед в кубиках 120 г`, 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.');
addCoctail('Пеликан', `Гренадин Monin 10мл Клубничный сироп Monin 10мл Персиковый сок 150мл Лимонный сок 15мл Банан 110г Клубника 50г Дробленый лед 60г`, 'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.');
addCoctail('Лонг айленд',`Лондонский сухой джин 30мл Водка Finlandia 30мл Белый ром 30мл Серебряная текила Sierra 30мл Трипл сек BOLS 30мл Сахарный сироп 30мл Лимонный сок 30мл Кола 100мл Лед в кубиках 300г`, 'Наполни френч-пресс кубиками льда доверху Налей лимонный сок 30 мл, сахарный сироп 30 мл и ликер трипл сек 30 мл Добавь водку 30 мл, джин 30 мл, белый ром 30 мл и серебряную текилу 30 мл Долей колу доверху и аккуратно размешай коктейльной ложкой');
function newCoctail(){
    let coctailName = prompt('Введите название коктеля');
    let coctailDescription = {};
    coctailDescription.coctailIngredient = prompt('Введите ингриденты для коктеля');
    coctailDescription.coctailRecipe = prompt('Введите рецепт коктеля'); 
    if(coctailName && coctailDescription.coctailIngredient && coctailDescription.coctailIngredient){
        coctailStorage.addValue(coctailName, coctailDescription);
    }
    else{
        alert('Введите название, ингридиенты и рецепт коктеля');
    }
}

document.getElementById('newRecipe').addEventListener('click', newCoctail);

function showRecipe(){
    let recipeName = prompt('Введите название коктеля');
    if(recipeName){
        let coctailDescription = coctailStorage.getValue(recipeName);
        let textfield = document.getElementById('textfield');
        textfield.innerHTML = `${coctailDescription.coctailIngredient} <br\> ${coctailDescription.coctailRecipe}` 
    }
    else{
        alert('Введите название коктеля');
    } 
}

document.getElementById('showRecipe').addEventListener('click', showRecipe);

function showAllCoctails(){
    let arrayOfCoctails = coctailStorage.getKeys();
    let names = '';
    arrayOfCoctails.forEach(coctail => names += `${coctail}  `);
    document.getElementById('textfield').innerHTML = names;
}

document.getElementById('showAllRecipeName').addEventListener('click', showAllCoctails);