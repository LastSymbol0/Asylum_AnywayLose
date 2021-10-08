import {getMarginLeft, getMarginTop, getRandomInt} from './Utils'

export function goFood (eat, onPlayerCollision) {
    var interval = setInterval(function () {
        var left = getMarginLeft(eat);
        eat.style.marginLeft = left - 1 + 'px';
        if (left <= 0) {
            var root = document.getElementById('root')
            root.removeChild(eat);
            // delete eat;
        }

        var playerShip = document.getElementById("playerShip");
        if (left <= getMarginLeft(playerShip) + 100 &&
            left >= getMarginLeft(playerShip)) {
            if (getMarginTop(eat) >= getMarginTop(playerShip) + 30 &&
                getMarginTop(eat) <= getMarginTop(playerShip) + 170) {

                onPlayerCollision()
                var root = document.getElementById('root')
                root.removeChild(eat);
                // delete eat;
            };
        };
    }, 20)
}

export function createFood (onPlayerCollision) {
    var root = document.getElementById('root')
    var eat = document.createElement("img");
    eat.style.position = 'absolute';
    eat.style.id = 'eat';
    eat.style.width = '100px'
    eat.style.marginLeft = '100%';
    eat.style.marginTop = getRandomInt(0, 500) + 'px';
    eat.src='./pic/eat2.svg';
    root.appendChild(eat);
    goFood(eat, onPlayerCollision);
}