/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react'
import { createBlackhole } from './items/Blackhole'
import { createEnemy } from './items/Enemy'
import { createFood } from './items/Food'
import { createPlayer, shoot, createBullet } from './items/Player'
import {getMarginTop} from './items/Utils'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import { asylum, AsylumProgram, PlayersProgram } from 'asylum-sdk'

import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react'
import { Connection, PublicKey, Keypair } from '@solana/web3.js'
import { Provider, Wallet } from '@project-serum/anchor'
// import { createShipMasterNFT } from '../Metaplex'

const shipPictures = [process.env.PUBLIC_URL + "/pic/unit.svg",process.env.PUBLIC_URL + "/pic/unit2.svg",process.env.PUBLIC_URL + "/pic/unit3.svg",process.env.PUBLIC_URL + "/pic/unit4.svg"];

const gameId = new PublicKey("11111111111111111111111111111112")

const killEnemyScoreBonus = 50;

export const Game = () => {
    var [score, setScore] = useState(0);
    var [level, setLevel] = useState(1);
    var [lives, setLives] = useState(5);
    var [pxToMove, setPxToMove] = useState(21);
    var [bullet, setBullet] = useState("~~>");
    
    var [spawners, setSpawners] = useState([] as NodeJS.Timer[]);

    const [nickname, setNickname] = useState('')
    const [playerAchievements, setPlayerAchievements] = useState([] as number[])
    const [achievements, setAchievements] = useState([] as asylum.AchievementData[])
    const [isPlayerDataFetched, setIsPlayerDataFetched] = useState(false)
    const [isGlobalDataFetched, setIsGlobalDataFetched] = useState(false)
    const [isGameEnded, setIsGameEnded] = useState(false)
    const [endGameActionsQueue, setEndGameActionsQueue] = useState([] as {(): Promise<void>}[])

    const wallet = useAnchorWallet()
    const __wallet = useWallet()

    async function getProvider() {
        if (!wallet)
            return;

        const network = "http://localhost:8899";
        const connection = new Connection(network, "processed")
        
        const provider = new Provider(
          connection, wallet, Provider.defaultOptions(),
        )
        return provider;
    }

    async function fetchPlayerData() {
        if (!wallet)
            return;

        const provider = await getProvider()
        const program = new PlayersProgram(provider as Provider)
    
        try {
          const account = await program.fetchPlayerGlobalAccountData(wallet.publicKey)
    
          console.log(account)
          setNickname(account.nickname.toString())
          setPlayerAchievements(account.achievements)
          setIsPlayerDataFetched(true)
        } catch (err) {
          console.log("Player data fetching error: ", err)
        }
    }

    async function fetchGlobalData() {
        const provider = await getProvider()
        const program = new AsylumProgram(provider as Provider)
        
        try {
            const gameAchievements = await program.fetchAcievementsData(gameId);
            
            console.log("gameAchievements", gameAchievements)
            setAchievements(gameAchievements)
            setIsGlobalDataFetched(true)
        } catch (err) {
            console.log("Achievements data fetching error: ", err)
        }
    }

    useEffect(() => {
        if (!isGlobalDataFetched)
            fetchGlobalData();
        if (!isPlayerDataFetched)
            fetchPlayerData();
    }, [isPlayerDataFetched, isGlobalDataFetched])

    async function addAchievement(achievement: string) {
        const provider = await getProvider()
        const program = new PlayersProgram(provider as Provider)
    
        try {
            const achievementId = achievements.find(x => x.label === achievement)?.id;

            if (achievementId)
            {
                // if player does not already has the achievement
                if (playerAchievements.indexOf(achievementId) === -1)
                {
                    setEndGameActionsQueue((current: {(): Promise<void>}[]) => [...current, () => program.addAchievement(achievementId, 0)])
                    // await program.addAchievement(achievementId, 0)
                }
            }
            else
                console.error("Could not find the achievement by type");
        } catch (err) {
            console.log("Transaction error: ", err)
        }
    }

    const onEnemyBorderCollision = () => {
        if (isGameEnded)
            return
        setLives(lives => lives - 1);

    }

    const onBulletEnemyCollision = () => {
        if (isGameEnded)
            return
        addAchievement('First kill')
        setScore(score => score + killEnemyScoreBonus);
    }
    
    const onPlayerBlackholeCollision = () => {
        if (isGameEnded)
            return
        setLives(lives =>
            {
                const newLives = lives - 5;
                if (lives > 0) {
                    addAchievement('Interstellar')
                }
                return newLives;
            });
    }
    
    const onPlayerFoodCollision = () => {
        setLives(lives => lives + 1);
    }

    const startGlobalTimer = () => {
        var header = document.getElementById("header") as HTMLElement;
        if (header)
        {
            var inter = setInterval(function () {
                header.style.marginTop = getMarginTop(header) - 1 + 'px';
                if (getMarginTop(header) <= -235) {
                    clearInterval(inter);
                };
            }, 20)
        }
        const enemySpawner = setInterval(function () {
            createEnemy(onEnemyBorderCollision)
        }, 2000)
        const bhSpawner = setInterval(function () {
            createBlackhole(onPlayerBlackholeCollision)
        }, 8000)
        const foodSpawner = setInterval(function () {
            createFood(onPlayerFoodCollision);
        }, 11000)

        setSpawners([enemySpawner, bhSpawner, foodSpawner])
    }

    const endGame = () => {
        if (!isGameEnded)
            return

        // stop spawn
        spawners.forEach(spawner => clearInterval(spawner));

        // remove existing
        var gameObjects = [
            ...document.getElementsByClassName("blackhole"),
            ...document.getElementsByClassName("enemy"),
            ...document.getElementsByClassName("food")
        ]
        var root = document.getElementById('root') as HTMLElement
        gameObjects.forEach(x => root.removeChild(x));

        // execute actions
        endGameActionsQueue.forEach(x => x())

        // message
        alert("One more time, loser?");
        alert("Press ok to restart the game.");

        location.reload()
    }

    const onClickStart = () => {
        createPlayer(shipPictures[0])
        startGlobalTimer()
    }

    const onClickBoost = () => {
        setPxToMove(pxToMove => pxToMove + 2);
    }

    const onClickHiddenButton = () => {
        alert("Hey stalker. You are still loser.");
        location.reload();
    }

    function actionHandler(key: string, e: KeyboardEvent) {
        var playerShip = document.getElementById("playerShip");

        if (!playerShip)
            return

        var cs = window.getComputedStyle(playerShip);
        var left = parseInt(cs.marginLeft);
        var top = parseInt(cs.marginTop);

        switch(key){
            case "left":
                if(left>0)
                    playerShip.style.marginLeft = left - pxToMove + "px";
                break;
            case "up":
                if(top>0)
                    playerShip.style.marginTop = top - pxToMove + "px";
                break;
            case "right":
                if(left < document.documentElement.clientWidth - 220)
                    playerShip.style.marginLeft = left + pxToMove + "px";
                break;
            case "down":
                if(top < document.documentElement.clientHeight - 100)
                    playerShip.style.marginTop = top + pxToMove + "px";
                break;
            case "space":
                createBullet(bullet);
                shoot(onBulletEnemyCollision);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (lives <= 0 && !isGameEnded) {
            setIsGameEnded(true);
        }
    }, [lives]);

    useEffect(endGame, [isGameEnded])

    useEffect(() => {
        const newLevel = Math.floor(score / 600)

        console.log("score", score)
        
        if (newLevel >= level) {
            setLevel(level => level + 1)
        }
    }, [score, level])

    useEffect(() => {
        var playerShip = document.getElementById("playerShip") as HTMLImageElement;

        if (!playerShip)
            return;


        console.log("levl", level);

        playerShip.src = shipPictures[(level - 1) % shipPictures.length];


        if (level === 3){
            setBullet("~~> <br> ~~>")
        }
        if (level === 4) {
            addAchievement('Infinity war')

            playerShip.style.paddingTop = "37px";
            setBullet("~~> <br><br> ~~> <br><br> ~~>")
        }
    }, [level, shipPictures, setBullet])


    return (
    <div>
        <div  style={{borderBottom: "solid #ffff00", minHeight: '230px'}}>
            <h1 id="header" style={{color: "#018f83", textAlign: "center"}}>Hey, {nickname}</h1>
            <h1 id="header" style={{color: "#018f83", textAlign: "center"}}>Wanna proof that you're not a loser?)</h1>

            <div>
                <div style={{width: "600px", color: "#ffd700", position: "absolute"}}>
                    Achievements:
                    {playerAchievements && playerAchievements.length !== 0 ?
                      <ul>{playerAchievements.map((x, i) =>
                      {
                        const achievement = achievements.find(item => item.id === x);
                        const display = achievement
                          ? `'${achievement.label}' - ${achievement.description}`
                          : `Something went wrong. Achievement id: ${x}`
                        return <li key={i}>{display}</li>
                      })}
                      </ul>
                      : <p>No achievements so far</p>}
                </div>
                <img id="start" onClick={onClickStart} src={process.env.PUBLIC_URL + "/pic/strart.png"} alt="start button" style={{width: "100px", marginLeft: "47%"}}/>
                &emsp;&emsp;&emsp;&emsp;
                <img id="boost" onClick={onClickBoost} src={process.env.PUBLIC_URL + "/pic/running.png"} alt="boost" style={{width: "80px", position: "absolute"}}/>
                <span id="speed" style={{color: "orange"}}>Current speed: {pxToMove}px</span>
                <button onClick={onClickStart}>Test me</button>
            </div>
        </div>

        <div style={{alignContent: 'space-between'}}>
            <h2 id="lives" style={{display: "inline", color: "red"}}>Lives: {'• '.repeat(lives >= 0 ? lives : 0)}</h2>
            &emsp;&emsp;&emsp;&emsp;
            <h2 id="score" style={{display: "inline", color: "orange"}}>Score: {score}&ensp;&ensp;</h2>
            <h2 id="level" style={{display: "inline", color: "orange"}}>Level: {level}</h2>

            <img onClick={onClickHiddenButton} id="HiddenButtonForWin" alt="" src={process.env.PUBLIC_URL + "/pic/HiddenButtonForWinImg.png"}/>
        </div>

        <KeyboardEventHandler handleKeys={["right", "left", "up", "down", "space"]} handleEventType="keydown" onKeyEvent={actionHandler}></KeyboardEventHandler>
    </div>)
}
