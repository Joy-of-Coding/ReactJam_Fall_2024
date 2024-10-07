import "./CreditScreen.css";
interface Props {
    setCurrentAppState: (
        value: string | ((prevState: string) => string)
    ) => void;
}

export default function CreditsScreen({ setCurrentAppState }: Props) {
    const CreditScreenSource = "./skeleton.webg";
    const handleClick = () => {
        // Go back to the title screen
        setCurrentAppState("titleScreen");
    };

    return (
        <div className="flex flex-col items-center">
            <img
                className="picture"
                alt="picture of game title screen"
                src={CreditScreenSource}
            />
            <p className="text-xl mb-4 text-center max-w-md font-Helvetica Neue">
                Get'er Done Credits
                <ul className="text-lg mb-4">
                    <li>Developers: CROWE Sam Braden Kartchener</li>
                    <li>Graphics: Designer Name</li>
                    <li>Special Thanks: Name 1, Name 2</li>
                </ul>
            </p>
            <h1 className="text-3xl mb-4">Get'er Done Credits</h1>
            <ul className="text-lg mb-4">
                <li>Developers: CROWE Sam Braden Kartchener</li>
                <li>Graphics: Designer Name</li>
                <li>Special Thanks: Name 1, Name 2</li>
            </ul>
            <button className="back-button" onClick={handleClick}>
                Back to Title
            </button>
        </div>
    );
}
