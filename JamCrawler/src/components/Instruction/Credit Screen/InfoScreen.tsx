import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    setCurrentAppState: (
        value: string | ((prevState: string) => string)
    ) => void;
}

export default function InfoScreen({ setCurrentAppState }: Props) {
    const CreditScreenSource = "./skeleton.webp"; // Corrected file extension

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
                    src={CreditScreenSource}
                />

                {/* Credit Titles */}
                <h1 className="text-3xl mb-4">Get'er Instructions</h1>

                {/* Developer & Credits List */}
                <motion.ul className="text-lg mb-4">
                    <li>
                        Developers:
                        <br /> CROWE Sam
                        <br /> Braden Kartchner
                        <br /> Katrina Wright
                        <br /> Anna Rankin
                        <br /> Caitlin Moffitt
                        <br /> John Schlautman
                        <br /> Jon Adams
                        <br /> River Barton
                        <br /> Steven Daniel
                        <br /> Suzanne Atkinson
                        <br /> TurtleWolf
                        <br /> Lisa Dean
                    </li>
                    <li>Graphics: Steven Daniel</li>
                    <li>Special Thanks: Katrina Wright, Suzanne Atkinson</li>
                </motion.ul>

                {/* Back Button */}
                <motion.button
                    className="back-button"
                    onClick={handleClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Back to Game
                </motion.button>
            </motion.div>
        </AnimatePresence>
    );
}
