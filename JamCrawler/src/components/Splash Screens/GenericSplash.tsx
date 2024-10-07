import { storyLine } from "./SplashScreenProps";
import { Monster, Player } from "../../types/types";

// TODO: all info contained in the storyLine array.
// pass state var to here containing number of dungeon player was on
interface Props {
    setCurrentAppState: (
        value: string | ((prevValue: string) => string)
    ) => void;
    setCurrDungeonNum: (
        value: number | ((prevValue: number) => number)
    ) => void;
    currDungeonNum: number;
    setPlayer: (value: Player | ((prevValue: Player) => Player)) => void;
    setMonster: (value: Monster | ((prevValue: Monster) => Monster)) => void;
    setLevel: (value: number | ((prevValue: number) => number)) => void;
    isGameUnlocked: boolean;
    setIsGameUnlocked: (
        value: boolean | ((prevValue: boolean) => boolean)
    ) => void;
}

export default function GenericSplash(props: Props) {
    const handleClick = () => {
        if (props.currDungeonNum >= 6) {
            // reset state for all relevant components
            props.setPlayer({
                position: { x: 1, y: 1 },
                strength: 10,
                defense: 5,
                health: 100,
                inventory: [],
                isAlive: true,
                experience: 0,
                maxHealth: 100,
            });
            props.setMonster({
                position: { x: 1, y: 1 },
                strength: 10,
                defense: 5,
                health: 100,
                luck: 0,
                inventory: [],
                isAlive: true,
            });
            props.setCurrDungeonNum(1);
            props.setLevel(1);
            props.setCurrentAppState("titleScreen");
        } else if (!props.isGameUnlocked) {
            props.setCurrentAppState("todoList");
            props.setIsGameUnlocked(true);
        } else {
            props.setCurrentAppState("game");
        }
    };

    return (
        <div className="flex flex-col">
            <div className="top-title">
                {storyLine[props.currDungeonNum - 1].title}
            </div>
            <img
                alt="image with game story"
                src={storyLine[props.currDungeonNum - 1].image}
                height={400}
            />
            <p className="text-xl mb-4 text-center max-w-md font-Helvetica Neue">
                {storyLine[props.currDungeonNum - 1].text}
            </p>

            <div>
                <button onClick={handleClick}>
                    {props.currDungeonNum >= 6 ? "Title Screen" : "Continue"}
                </button>
            </div>
        </div>
    );
}
