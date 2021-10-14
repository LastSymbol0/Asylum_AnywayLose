import {getMarginLeft, getMarginTop, getRandomInt} from './Utils'

export function goFood (food, onPlayerCollision) {
    setInterval(function () {
        var left = getMarginLeft(food);
        food.style.marginLeft = left - 1 + 'px';
        if (left <= 0) {
            var root = document.getElementById('root')
            root.removeChild(food);
        }

        var playerShip = document.getElementById("playerShip");
        if (left <= getMarginLeft(playerShip) + 100 &&
            left >= getMarginLeft(playerShip)) {
            if (getMarginTop(food) >= getMarginTop(playerShip) + 30 &&
                getMarginTop(food) <= getMarginTop(playerShip) + 170) {

                onPlayerCollision()
                var root = document.getElementById('root')
                root.removeChild(food);
            };
        };
    }, 20)
}

export function createFood (onPlayerCollision) {
    var root = document.getElementById('root')
    var food = document.createElement("img");
    food.style.position = 'absolute';
    food.style.class = 'food';
    food.style.width = '100px'
    food.style.marginLeft = '100%';
    food.style.marginTop = getRandomInt(0, 500) + 'px';
    food.src=process.env.PUBLIC_URL + '/pic/eat2.svg';
    root.appendChild(food);
    goFood(food, onPlayerCollision);
}