import React, { useState } from "react";
import "./CombatEncounter.css";
import { Monster, Player  } from "../../types/types";
import { PLAYER_CHAR, MONSTER_CHAR } from "../../constants/constants";
import { PlayerCombatStats, monsterCombatStats } from "../../types/types";

interface CombatProps {
    player: Player;
    monster: Monster;
    setPlayer: (value: Player | ((prevValue: Player) => Player)) => void;
    setMonster: (value: Monster | ((prevValue: Monster) => Monster)) => void;
    setCurrentAppState: (
        value: string | ((prevValue: string) => string)
    ) => void;
}

export default function CombatEncounter({
    player,
    monster,
    setPlayer,
    setMonster,
    setCurrentAppState,
}: CombatProps) {
    const [largeResults, setLargeResults] = useState<string | null>(null);
    const [playerCanReturn, setPlayerCanReturn] = useState<boolean>(false);
    const [combatEnded, setCombatEnded] = useState<boolean>(false);
    const [combatRound, setCombatRound] = useState<number>(1);
    const [resultsText, setResultsText] = useState<Array<string>>([]);

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

    console.log("has weapon:", hasWeapon);
    const [playerCombatStats, setPlayerCombatStats] =
        useState<PlayerCombatStats>({
            attack: hasWeapon ? 12 : 10, /* different stat for levels */
            defense: hasHelmet ? 7 : 5, 
            exp: 0, /* the Defeat of Monster +1000 point to Experience and promotion to next level, automatically */
        });
    const [monsterCombatStats, setMonsterCombatStats] =
        useState<monsterCombatStats>({
            attack: 10, /* different stat for levels */
            defense: 5,
            hp: 60,
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
            }
        }

        setResultsText((prev) => [...prev, "-------"]);
        // end of round: increase round number
        setCombatRound((prev) => prev + 1);
    };

    const handleReturn = () => {
        setCurrentAppState("game");
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
                    <span className="icons">{MONSTER_CHAR}</span>
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
                    {resultsText.map((item: string, index: number) => (
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
            </div>
        </div>
    );
}
