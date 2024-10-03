import React from "react";
import "./CombatStageModal.css";

interface Props {
    inCombat: boolean;
}

export default function CombatStageModal(props: Props) {
    if (!props.inCombat) {
        return null;
    }
    return (
        <div className="flex flex-col items-center justify-center modal">
            <div>TEST MODAL</div>
            <div>test2</div>
        </div>
    );
}
