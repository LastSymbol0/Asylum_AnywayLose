/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react'
import { createBlackhole } from './items/Blackhole'
import { createEnemy } from './items/Enemy'
import { createFood } from './items/Food'
import { createPlayer, shoot, createBullet } from './items/Player'
import {getMarginLeft, getMarginTop, getRandomInt} from './items/Utils'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import playersIdl from '../asylum-sdk/idl/players.json'
import asylumIdl from '../asylum-sdk/idl/asylum.json'
import { players, asylum } from '../asylum-sdk'

import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { Connection, PublicKey } from '@solana/web3.js'
import { Idl, Program, Provider } from '@project-serum/anchor'
import { Achievement, AchievementData, AchievementsList } from './AchievementsList'

const shipPictures = ["/pic/unit.svg","/pic/unit2.svg","/pic/unit3.svg","/pic/unit4.svg"];

const playersProgramID = new PublicKey(playersIdl.metadata.address)
const asylumProgramID = new PublicKey(asylumIdl.metadata.address)
const gameId = new PublicKey("11111111111111111111111111111112")

const killEnemyScoreBonus = 50;

export const Game = () => {
    
    var [score, setScore] = useState(0);
    var [level, setLevel] = useState(1);
    var [lives, setLives] = useState(5);
    var [pxToMove, setPxToMove] = useState(21);
    var [bullet, setBullet] = useState("~~>");

    const [nickname, setNickname] = useState('')
    const [playerAchievements, setPlayerAchievements] = useState([] as number[])
    const [achievements, setAchievements] = useState([] as AchievementData[])
    const [isPlayerDataFetched, setIsPlayerDataFetched] = useState(false)
    const [isGlobalDataFetched, setIsGlobalDataFetched] = useState(false)

    const wallet = useAnchorWallet()

    async function getProvider() {
        if (!wallet)
            return;

        const network = "http://127.0.0.1:8899";
        const connection = new Connection(network, "processed")
        
        const provider = new Provider(
          connection, wallet, Provider.defaultOptions(),
        )
        return provider;
    }

    async function fetchPlayerData() {
        console.log("fetch; wallet:", wallet)
        if (!wallet)
            return;

        const provider = await getProvider()
        const program = new Program(playersIdl as Idl, playersProgramID, provider)
    
        try {
          const [playerAccountAddress, _] = await players.findPlayerGlobalAccountAddress(wallet.publicKey, playersProgramID)
          const account = await program.account.playerAccount.fetch(playerAccountAddress)
    
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
        const program = new Program(asylumIdl as Idl, asylumProgramID, provider)
    
        try {
            const [achievementsAccountAddress, _] = await asylum.findAchievementsAccountAddress(asylumProgramID)
            const account = await program.account.achievementsAccount.fetch(achievementsAccountAddress)
            
            console.log(account)

            const gameAchievements = account.achievements
              .filter((x: asylum.AchievementData) => x.game.toString() === gameId.toString())
              .map((x: asylum.AchievementData) => { return {type: x.label, id: x.id, label: x.label, description: x.description}});
            
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

    async function addAchievement(achievement: Achievement) {
        const provider = await getProvider()
        const program = new Program(playersIdl as Idl, playersProgramID, provider)
    
        try {
            const achievementId = achievements.find(x => x.type === achievement)?.id;

            if (achievementId)
            {
                // if player does not already has the achievement
                if (playerAchievements.indexOf(achievementId) === -1)
                {
                    await players.addAchievement(program, achievementId, 0)
                    setIsPlayerDataFetched(false);
                }
            }
            else
                console.error("Could not find the achievement by type");
        } catch (err) {
            console.log("Transaction error: ", err)
        }
    }

    const onEnemyBorderCollision = () => {
        setLives(lives => lives - 1);

        // TODO: rewrite
        if (lives <= 0) {
            alert("Looooooser!");
            location.reload();
        };
    }

    const onBulletEnemyCollision = () => {
        addAchievement('First kill')
        setScore(score => score + killEnemyScoreBonus);
    }
    
    const onPlayerBlackholeCollision = () => {
        setLives(lives =>
            {
                const newLives = lives - 5;
                if (lives <= 0) {
                    addAchievement('Interstellar')

                    alert("Oh, f*cking black hole. You lose. Try again.");
                    alert("BTW, if you wanna know what`s happens when you fall in black hole, you can follow the link 'https://teletype.in/@nakedspace/HJrT6uhs7'");
                    location.reload();
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
                if (getMarginTop(header) <= -230) {
                    clearInterval(inter);
                };
            }, 20)
        }
        setInterval(function () {
            createEnemy(onEnemyBorderCollision)
        }, 2000)
        setInterval(function () {
            createBlackhole(onPlayerBlackholeCollision)
        }, 8000)
        setInterval(function () {
            createFood(onPlayerFoodCollision);
        }, 11000)
    }

    const onClickStart = () => {
        createPlayer(shipPictures[0])
        startGlobalTimer()
    }

    const onClickBoost = () => {
        setPxToMove(pxToMove => pxToMove + 2);
    }

    const onClickHiddenButton = () => {
        alert("Nu zdravstvuy stalker. You are still loser.");
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


    if (lives <= 0) {
        alert("One more time, loser?");
        location.reload();
    }

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
        <div  style={{borderBottom: "solid #ffff00"}}>
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
                <img id="start" onClick={onClickStart} src="/pic/strart.png" alt="start button" style={{width: "100px", marginLeft: "47%"}}/>
                &emsp;&emsp;&emsp;&emsp;
                <img id="boost" onClick={onClickBoost} src="/pic/running.png" alt="boost" style={{width: "80px", position: "absolute"}}/>
                <span id="speed" style={{color: "orange"}}>Current speed: {pxToMove}px</span>
            </div>
        </div>

        <div style={{alignContent: 'space-between'}}>
            <h2 id="lives" style={{display: "inline", color: "red"}}>Lives: {'• '.repeat(lives)}</h2>
            &emsp;&emsp;&emsp;&emsp;
            <h2 id="score" style={{display: "inline", color: "orange"}}>Score: {score}&ensp;&ensp;</h2>
            <h2 id="level" style={{display: "inline", color: "orange"}}>Level: {level}</h2>

            <img onClick={onClickHiddenButton} id="HiddenButtonForWin" alt="" src="/pic/HiddenButtonForWinImg.png"/>
        </div>

        <KeyboardEventHandler handleKeys={["right", "left", "up", "down", "space"]} handleEventType="keydown" onKeyEvent={actionHandler}></KeyboardEventHandler>
    </div>)
}
