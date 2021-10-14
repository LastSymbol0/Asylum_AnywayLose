import { enemiesCount } from "./Enemy";
import {getMarginLeft, getMarginTop } from './Utils'

var bulletsCount = '1';

function checkClash (fire) {
    var enemy1 = document.getElementById("enemy" + (enemiesCount - 1));
    var enemy2 = document.getElementById("enemy" + (enemiesCount - 2));
    var enemy3 = document.getElementById("enemy" + (enemiesCount - 3));
    var root = document.getElementById('root')
    if ((getMarginLeft(fire) >= getMarginLeft(enemy1)) &&
            (getMarginTop(fire) >= getMarginTop(enemy1) + 30 &&
            getMarginTop(fire) <= getMarginTop(enemy1) + 170)) {
            root.removeChild(enemy1);
        return (true);
    };
    if ((getMarginLeft(fire) >= getMarginLeft(enemy2)) &&
            (getMarginTop(fire) >= getMarginTop(enemy2) + 30 &&
            getMarginTop(fire) <= getMarginTop(enemy2) + 170)) {
            root.removeChild(enemy2);
        return (true);
    };
    if ((getMarginLeft(fire) >= getMarginLeft(enemy3)) &&
            (getMarginTop(fire) >= getMarginTop(enemy3) + 30 &&
            getMarginTop(fire) <= getMarginTop(enemy3) + 170)) {
            root.removeChild(enemy3);
        return (true);
    };
}


export function shoot (onBulletEnemyCollision) {
    var playerShip = document.getElementById("playerShip");
    var fire = document.getElementById("fire" + (bulletsCount - 1));

    var left = getMarginLeft(playerShip) + 150;

    var start = Date.now();

    var timer = setInterval(function () {

        var timePassed = Date.now() - start;
        var root = document.getElementById('root')

        if (checkClash(fire)) {

            onBulletEnemyCollision()

            clearInterval(timer);
            root.removeChild(fire);
        }
        // eslint-disable-next-line no-restricted-globals
        if (left + timePassed / 3 >  1.5 * screen.width) {
            clearInterval(timer);
            root.removeChild(fire);
        }
        fire.style.marginLeft = left + timePassed / 3 + 'px';
    }, 20)
}

export function createBullet(bullet) {
    var root = document.getElementById('root')
    var fire = document.createElement('div');
    var playerShip = document.getElementById('playerShip')
    fire.id = "fire" + bulletsCount;
    bulletsCount++;
    fire.style.position = "absolute";
    fire.style.marginLeft = getMarginLeft(playerShip) + 150 + "px";
    fire.style.marginTop = getMarginTop(playerShip) + 90 + 'px';
    fire.style.color = "#a7ff23";  
    fire.innerHTML = bullet;

    
    root.appendChild(fire);
}



export function createPlayer(shipPicture) {
    var root = document.getElementById('root')

    var player = document.createElement("img");
    player.id =  "playerShip";
    player.style.width = '200px';
    player.style.position = "absolute";
    player.style.cursor = "pointer";
    player.src=shipPicture;
    player.alt='player';

    root.appendChild(player);
}