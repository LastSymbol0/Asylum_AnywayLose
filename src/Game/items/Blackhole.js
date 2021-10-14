import {getMarginLeft, getMarginTop, getRandomInt} from './Utils'

export function runBlackhole (Blackhole, onPlayerCollision) {
    setInterval(function () {

        var left = getMarginLeft(Blackhole);
        Blackhole.style.marginLeft = left - 3 + 'px';

        if (left <= -100) {
            var root = document.getElementById('root')
            root.removeChild(Blackhole);
        }

        var playerShip = document.getElementById("playerShip");

        if (left <= getMarginLeft(playerShip) + 100 &&
            left >= getMarginLeft(playerShip)) {
            if (getMarginTop(Blackhole) >= getMarginTop(playerShip) - 30 &&
                getMarginTop(Blackhole) <= getMarginTop(playerShip) + 80) {
                
                onPlayerCollision()

                var root = document.getElementById('root')
                root.removeChild(Blackhole);
            };
        };
    }, 20)
}

export const createBlackhole = (onPlayerCollision) => {
    var root = document.getElementById('root')
    var Blackhole = document.createElement("img");
    Blackhole.style.position = 'absolute';
    Blackhole.style.class = 'blackhole';
    Blackhole.style.width = '100px';
    Blackhole.style.marginLeft = '100%';
    Blackhole.style.marginTop = getRandomInt(0, 500) + 'px';
    Blackhole.src=process.env.PUBLIC_URL + '/pic/blackhole.svg';
    root.appendChild(Blackhole);
    runBlackhole(Blackhole, onPlayerCollision);
    
    return Blackhole
}
