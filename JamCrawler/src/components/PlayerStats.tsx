// src/components/PlayerStats.tsx
import "./PlayerStats.css";
import React from "react";
import { Player } from "../types/types";

type PlayerStatsProps = {
    player: Player;
};

const PlayerStats: React.FC<PlayerStatsProps> = ({ player }) => (
    <div className="player-stats">
        <div className="vitals">
            <h2 id="h2Stat">Player Stats</h2>
            <div className="container">
                <div className="leftAlign">
                    <p id="leftMargin">💪</p>
                    <p id="leftMargin">🔋</p>
                    <p id="leftMargin">❤️</p>
                    <p id="leftMargin">🍀</p>
                </div>
                <div className="leftAlign">
                    <p> Strength: </p>
                    <p> Defense: </p>
                    <p> Health: </p>
                    <p> Experience: </p>
                </div>
                <div className="leftAlign">
                    <p>{player.strength}</p>
                    <p>{player.defense}</p>
                    <p>
                        {player.health} / {player.maxHealth}
                    </p>
                    <p>{player.experience}</p>
                </div>
            </div>
        </div>
    </div>
);

export default PlayerStats;