import { motion, AnimatePresence } from "framer-motion";

interface Props {
    setCurrentAppState: (
        value: string | ((prevState: string) => string)
    ) => void;
}

export default function InfoScreen({ setCurrentAppState }: Props) {
    const InfoScreenSource = "./GeorgeFarm.webp"; // Corrected file extension

    const handleClick = () => {
        setCurrentAppState("titleScreen");
    };

    // Define animations for the screen
    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    };

    return (
        <AnimatePresence>
            <motion.div
                className="credits-background flex flex-col items-center"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5 }}
            >
                {/* Background Image */}
                <img
                    className="picture"
                    alt="picture of game credit screen"
                    src={InfoScreenSource}
                />

                {/* Credit Titles */}
                <h1 className="text-3xl mb-4">Get'er Instructions</h1>

                {/* Developer & Credits List */}
                <motion.ul className="text-lg mb-4">
                    <h2>Greetings Adventurer</h2>

                    <p>
                        Please allow me to guide you through our little game to
                        better understand exactly what you have gotten yourself
                        into. No take backs at this point; you can only move
                        forward.
                    </p>

                    <p>
                        <strong>Happy Adventuring, and let's get to it!</strong>
                    </p>

                    <ol>
                        <li>
                            <strong>Introduction Screen</strong>
                            <ol type="a">
                                <li>
                                    Please let us know if you liked our game
                                    when you finish by selecting the credits,
                                    viewing our happy team who wrote this little
                                    adventure, and leaving us a rating. Thanks
                                    for your feedback; it keeps our team happy
                                    and productive!
                                </li>
                            </ol>
                        </li>

                        <li>
                            <strong>The Storyline</strong>: The storyline
                            progresses throughout the dungeon crawl, but please
                            feel free to skip all this drivel if some nasty
                            monster cuts your head off and you have to start
                            over. We do so love for you to exact your revenge on
                            our various Hobgoblins.
                        </li>

                        <li>
                            <strong>Main Premise</strong>: The main premise of
                            the game (besides the Kill-or-be-Killed fun) is
                            getting those annoying everyday Task List(s) out of
                            the way so that you can enjoy a few hours of
                            pleasant Dungeon Crawling at your leisure.
                            <ol type="a">
                                <li>
                                    Before you can start the Adventure of a
                                    lifetime, you must complete 3 Real-Life
                                    tasks (we wouldn't want you to get yelled at
                                    or quit your Dungeon Crawl);
                                </li>
                                <li>
                                    Enter your 3 Tasks, complete all 3 Tasks,
                                    and check them off the list provided for
                                    you—easy peasy!
                                </li>
                                <li>
                                    Life stuff completed, and off to the
                                    Dungeon.
                                </li>
                            </ol>
                        </li>

                        <li>
                            <strong>Movement</strong>: Use the arrow keys or
                            mouse. Please remember to click on your player after
                            combat—he likes a pat on the back.
                        </li>

                        <li>
                            <strong>Weapons and Armor</strong>: These are
                            automatic.
                        </li>

                        <li>
                            <strong>Health Potions</strong>: Add +25 to life and
                            can only be used when you are damaged before battle.
                            Please, Adventurer, get strong before you tackle any
                            more of our nasty little surprises.
                        </li>

                        <li>
                            <strong>Experience and Leveling</strong>: This is
                            automatic when you pass through the doorway to the
                            next level.
                        </li>

                        <li>
                            <strong>Last, but Certainly Not Least</strong>:{" "}
                            <h3>
                                <i>
                                    <u>ENJOY!</u>
                                </i>
                            </h3>{" "}
                            Let the stress of a hard day of life slip away and
                            bash our little monsters to your heart's content!
                            Bye-bye for now!
                        </li>
                    </ol>

                    <h4>
                        <strong>Happy Adventuring, and let's get to it!</strong>
                    </h4>
                </motion.ul>

                {/* Back Button */}
                <motion.button
                    className="back-button"
                    onClick={handleClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Into the Dungeon
                </motion.button>
            </motion.div>
        </AnimatePresence>
    );
}
