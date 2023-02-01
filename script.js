import { data } from "./data/data.js";

const grid = document.querySelector('.grid');
const input = document.querySelector('.input');
const select = document.querySelector('.select');

function getCard (obj) {
    const card = document.createElement('div');
    card.className = 'card'; 
    card.innerHTML = `<div class="image__wrapper">
                        <img class='image' src=${obj.image} alt="pic">
                    </div>
    <div class="card__text">
        <p class="text__name">${obj.name}</p>
        <p class="text__discription">Actor: ${obj.actor}</p>
        <p class="text__discription">Gender: ${obj.gender}</p>
        <p class="text__discription">House: ${obj.house}</p>
        <p class="text__discription">Wand core: ${obj.wand.core}</p>
        <p class="text__discription">Alive: ${obj.alive == true? 'yes':'no'} </p>
    </div>`

    return card;
};

function selectSchool (event) {
    grid.innerHTML = '';

    let inputEvent =input.value;
    let selectValue = select.value;
    let newData = data;

    if (event.type == 'change') {
        inputEvent = ''
        input.value =''
    };
    console.log(input);


    newData =  data.filter((item)=>(item.house == selectValue || select.value == 'Choose one'));
    console.log(newData)
    newData.forEach((item)=>grid.append(getCard(item)));

    if (inputEvent != '') {
    grid.innerHTML = '';

    newData
    .filter((item)=>
    item.name.toLowerCase().includes(inputEvent.toLowerCase().trim()) || 
    item.actor.toLowerCase().includes(inputEvent.toLowerCase().trim()))
    .forEach((item)=>grid.append(getCard(item)));
    }
}

input.addEventListener('input', selectSchool);
select.addEventListener('change', selectSchool);

data.forEach((card)=>grid.append(getCard(card)))