import React, { useState } from "react";
import "./CombatEncounter.css";
import { Monster, Player } from "../../types/types";
import { PLAYER_CHAR, MONSTER_CHAR } from "../../constants/constants";
import { PlayerCombatStats, monsterCombatStats } from "../../types/types";

interface CombatProps {
    player: Player;
    monster: Monster;
    setPlayer: (value: Player | ((prevValue: Player) => Player)) => void;
    setMonster: (value: Monster | ((prevValue: Monster) => Monster)) => void;
}

export default function CombatEncounter({
    player,
    monster,
    setPlayer,
    setMonster,
}: CombatProps) {
    const [combatEnded, setCombatEnded] = useState<boolean>(false);
    const [combatRound, setCombatRound] = useState<number>(1);
    const [resultsText, setResultsText] = useState<Array<string>>([]);
    let hasWeapon: boolean = false;
    let arbitrary =
        player.inventory.length > 0
            ? player.inventory.reduce((accum, currVal) => {
                  hasWeapon = hasWeapon || currVal.name == "Sword";
                  return accum || currVal;
              })
            : 0;
    console.log("has weapon:", hasWeapon);
    const [playerCombatStats, setPlayerCombatStats] =
        useState<PlayerCombatStats>({
            attack: hasWeapon ? 30 : 15,
            defense: 1,
            exp: 0,
        });
    const [monsterCombatStats, setMonsterCombatStats] =
        useState<monsterCombatStats>({
            attack: 3,
            defense: 10,
            hp: 100,
        });
    const combatFunction = () => {
        setResultsText((prev) => [...prev, `Round ${combatRound}:`]);
        let damageToMonster =
            playerCombatStats.attack - monsterCombatStats.defense;
        setResultsText((prev) => [
            ...prev,
            `Did ${damageToMonster} damage to monster!`,
        ]);
        setMonsterCombatStats((prev) => ({
            ...prev,
            hp: prev.hp - damageToMonster < 0 ? 0 : prev.hp - damageToMonster,
        }));
        // check if monster is dead
        if (monsterCombatStats.hp <= 0) {
            // end combat (remove attack button)
            setCombatEnded(true);
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
                    <span className="icons">{MONSTER_CHAR}</span>
                    <span className="monster-stats">
                        <span>Attack: {monsterCombatStats.attack}</span>
                        <span>Defense: {monsterCombatStats.defense}</span>
                        <span>Health: {monsterCombatStats.hp}</span>
                    </span>
                </div>
                <div className="attack-button">
                    {!combatEnded && <button>Attack!</button>}
                </div>
                <div className="action-results">hello</div>
            </div>
        </div>
    );
}
