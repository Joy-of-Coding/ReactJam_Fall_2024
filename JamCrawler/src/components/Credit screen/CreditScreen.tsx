<<<<<<< HEAD
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
=======
import React, { useState } from "react";

>>>>>>> 00aec7dc520bd31cc6d3e5068df306dae2910317

interface Props {
    setCurrentAppState: (
        value: string | ((prevState: string) => string)
    ) => void;
}

export default function CreditsScreen({ setCurrentAppState }: Props) {
<<<<<<< HEAD
    const CreditScreenSource = "./skeleton.webp"; // Corrected file extension

    const handleClick = () => {
        setCurrentAppState("titleScreen");
    };

    // Define animations for the screen
    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 }
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
                <h1 className="text-3xl mb-4">Get'er Done Credits</h1>

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
=======
    const CreditScreenSource = "./skeleton.webg";

    const handleClick = () => {
        // Go back to the title screen
        setCurrentAppState("titleScreen");
    };

    return (
        <div className="flex flex-col items-center">
            <img className="picture" alt="picture of game title screen" src={CreditScreenSource} />
            <p className="text-xl mb-4 text-center max-w-md font-Helvetica Neue">
                Get'er Done Credits
            </p>
            <h1 className="text-3xl mb-4">Get'er Done Credits</h1>
            <ul className="text-lg mb-4">
                <li>Developers: CROWE Sam
                    Braden Kartchener
                    Katrina Wright
                    Anna Rankin
                    Caitlin Moffitt
                    John Schlautman
                    Jon Adams
                    River Barton
                    Steven Daniel
                    Suzanne Atkinson
                    TurtleWolf
                </li>
                <li>Graphics: Steven Daniel </li>
                <li>Special Thanks: Katrina Wright, Suzanne Atkinson</li>
            </ul>
            <button className="back-button" onClick={handleClick}>
                Back to Game
            </button>
        </div>
>>>>>>> 00aec7dc520bd31cc6d3e5068df306dae2910317
    );
}