import {getMarginLeft, getMarginTop, getRandomInt} from './Utils'

export var enemiesCount = '1';

export function goEnemy (enemy, onBorderCollision) {
    var start = Date.now();

    var cs = window.getComputedStyle(enemy);
    var left = parseInt(cs.marginLeft);

    var timer = setInterval(function () {
        var timePassed = Date.now() - start;
        enemy.style.marginLeft = left - timePassed/3 + 'px';
        if (parseInt(cs.marginLeft) <= -200) {

            onBorderCollision();

            clearInterval(timer);
            var root = document.getElementById('root')
            root.removeChild(enemy);
            // delete enemy;
        };
    }, 20)
}

export function createEnemy(onBorderCollision) {
    var root = document.getElementById('root')
    var enemy = document.createElement("img");
    enemy.id =  "enemy" + enemiesCount;
    enemy.style.position = 'absolute';
    enemy.style.width = '200px';
    enemy.style.marginLeft = '100%';
    enemy.style.marginTop = getRandomInt(0, 500) + 'px';
    enemy.src='./pic/enemy.png';
    enemy.alt='enemy';
    enemiesCount++;
    root.appendChild(enemy);
    goEnemy(enemy, onBorderCollision);
    // delete enemy;
}