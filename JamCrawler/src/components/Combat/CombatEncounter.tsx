import React, { useState } from "react";
import "./CombatEncounter.css";
import { Monster, Player } from "../../types/types";
import { PLAYER_CHAR } from "../../constants/constants";
import { PlayerCombatStats, monsterCombatStats } from "../../types/types";
import { playerLevels, monsterLevels } from "./player_monster_level_constants";
const SNAKE_ICON = "🐍";
const ZOMBIE_ICON = "🧟‍♂️";
const SKELETON_ICON = "💀";
const OGRE_ICON = "👹";
const DROW_ICON = "🧌";
const MONSTER_ARRAY = [
  SNAKE_ICON,
  ZOMBIE_ICON,
  SKELETON_ICON,
  OGRE_ICON,
  DROW_ICON,
];

interface CombatProps {
    player: Player;
    monster: Monster;
    setPlayer: (value: Player | ((prevValue: Player) => Player)) => void;
    setMonster: (value: Monster | ((prevValue: Monster) => Monster)) => void;
    setCurrentAppState: (
        value: string | ((prevValue: string) => string)
    ) => void;
    setCurrDungeonNum: (
        value: number | ((prevValue: number) => number)
    ) => void;
    currDungeonNum: number;
    setLevel: (value: number | ((prevValue: number) => number)) => void;
}

export default function CombatEncounter({
    player,
    monster,
    setPlayer,
    setMonster,
    setCurrentAppState,
    currDungeonNum,
    setCurrDungeonNum,
    setLevel,
}: CombatProps) {
    const [largeResults, setLargeResults] = useState<string | null>(null);
    const [playerCanReturn, setPlayerCanReturn] = useState<boolean>(false);
    const [combatEnded, setCombatEnded] = useState<boolean>(false);
    const [combatRound, setCombatRound] = useState<number>(1);
    const [resultsText, setResultsText] = useState<Array<string>>([]);
    const [playerDied, setPlayerDied] = useState<boolean>(false);

    let hasWeapon: boolean =
        player.inventory.length > 0
            ? player.inventory.reduce((accum, currVal) => {
                  return currVal.name == "Sword" || accum;
              }, false)
            : false;

    let hasHelmet: boolean =
        player.inventory.length > 0
            ? player.inventory.reduce((accum, currVal) => {
                  return currVal.name == "Helmet" || accum;
              }, false)
            : false;
    /* */

    //console.log("has weapon:", hasWeapon);
    const [playerCombatStats, setPlayerCombatStats] =
        useState<PlayerCombatStats>({
            attack: hasWeapon
                ? playerLevels[currDungeonNum - 1].strength + 2
                : playerLevels[currDungeonNum - 1]
                      .strength /* different stat for levels */,
            defense: hasHelmet
                ? playerLevels[currDungeonNum - 1].defense + 2
                : playerLevels[currDungeonNum - 1].defense,
            exp: 0 /* the Defeat of Monster +1000 point to Experience and promotion to next level, automatically */,
            health: 0 /* Using global health, this stat doesn't matter */,
        });
    const [monsterCombatStats, setMonsterCombatStats] =
        useState<monsterCombatStats>({
            attack: monsterLevels[currDungeonNum - 1]
                .strength /* different stat for levels */,
            defense: monsterLevels[currDungeonNum - 1].defense,
            hp: monsterLevels[currDungeonNum - 1].hp,
        });

    const handleClick = () => {
        combatFunction();
    };

    const combatFunction = () => {
        setResultsText((prev) => [...prev, `Round ${combatRound}:`]);
        let damageToMonster =
            playerCombatStats.attack - monsterCombatStats.defense;
        setResultsText((prev) => [
            ...prev,
            `Player did ${damageToMonster} damage to monster!`,
        ]);
        setMonsterCombatStats((prev) => ({
            ...prev,
            hp: prev.hp - damageToMonster < 0 ? 0 : prev.hp - damageToMonster,
        }));
        // TODO: update monster global health??
        // check if monster is dead
        let monsterDead = false;
        if (monsterCombatStats.hp - damageToMonster <= 0) {
            // end combat (remove attack button)
            setCombatEnded(true);
            setResultsText((prev) => [...prev, "You killed the monster!"]);
            // TODO: give player experience
            // set larger popup text to display that monster was killed
            setLargeResults("You killed the monster!");
            setMonster((prev) => ({
                ...prev,
                isAlive: false,
            }));
            // unlock button to return to dungeon
            setPlayerCanReturn(true);
            monsterDead = true;
        }
        // calc damage to player
        if (!monsterDead) {
            let damageToPlayer =
                monsterCombatStats.attack - playerCombatStats.defense;
            setResultsText((prev) => [
                ...prev,
                `Monster did ${damageToPlayer} damage to you!`,
            ]);
            setPlayer((prev) => ({
                ...prev,
                health:
                    prev.health - damageToPlayer < 0
                        ? 0
                        : prev.health - damageToPlayer,
            }));
            // check if player is dead
            if (player.health - damageToPlayer <= 0) {
                setCombatEnded(true);
                setResultsText((prev) => [
                    ...prev,
                    "The monster killed you...",
                ]);
                setLargeResults("The monster killed you...");
                // unlock buttons to try again or return to menu
                setPlayerDied(true);
            }
        }
        setResultsText((prev) => [...prev, "-------"]);
        // end of round: increase round number
        setCombatRound((prev) => prev + 1);
    };

    const handleReturn = () => {
        setCurrentAppState("game");
    };

    const handleTryAgain = (eve: React.MouseEvent<HTMLButtonElement>) => {
        let eventTarget = eve.target as HTMLButtonElement;
        // reset state for all relevant components:
        // player, monster, currDungeonNum, level
        setPlayer({
            position: { x: 1, y: 1 },
            strength: 10,
            defense: 5,
            health: 100,
            inventory: [],
            isAlive: true,
            experience: 0,
            maxHealth: 100,
        });
        setMonster({
            position: { x: 1, y: 1 },
            strength: 10,
            defense: 5,
            health: 100,
            luck: 0,
            inventory: [],
            isAlive: true,
        });
        setCurrDungeonNum(1);
        setLevel(1);
        if (eventTarget.id == "tryAgain") {
            setCurrentAppState("genericSplash");
        }
        if (eventTarget.id == "mainMenu") {
            setCurrentAppState("titleScreen");
        }
    };

    return (
        <div>
            <h2>Combat!</h2>
            <div></div>
            <div className="combat-board">
                <div className="icons-and-stats">
                    <span className="player-stats">
                        <span>Attack: {playerCombatStats.attack}</span>
                        <span>Defense: {playerCombatStats.defense}</span>
                        <span>Health: {player.health}</span>
                        <span>Exp: {playerCombatStats.exp}</span>
                    </span>
                    <span className="icons" id="farmer-char">
                        {PLAYER_CHAR}
                    </span>
                    <span className="icons">{MONSTER_ARRAY[currDungeonNum -1]}</span>
                    <span className="monster-stats">
                        <span>Attack: {monsterCombatStats.attack}</span>
                        <span>Defense: {monsterCombatStats.defense}</span>
                        <span>Health: {monsterCombatStats.hp}</span>
                    </span>
                </div>
                <div className="attack-button">
                    {!combatEnded && (
                        <button onClick={handleClick}>Attack!</button>
                    )}
                </div>
                <div className="result-popup">{largeResults}</div>
                <div className="action-results">
                    {/* {resultsText.map((item: string, index: number) => ( */}
                    {resultsText
                        .slice()
                        .reverse()
                        .map((item: string, index: number) => (
                            <div key={index}>{item}</div>
                        ))}
                </div>
                {playerCanReturn && (
                    <div className="return-button">
                        <button onClick={handleReturn}>
                            Return to dungeon
                        </button>
                    </div>
                )}
                {playerDied && (
                    <div className="try-again-buttons">
                        <button id="tryAgain" onClick={handleTryAgain}>
                            Try Again
                        </button>
                        <button id="mainMenu" onClick={handleTryAgain}>
                            Main Menu
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
