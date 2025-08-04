import React, {useEffect, useState, useRef} from "react";
import {motion} from 'framer-motion'

const Headercontent = () => {
    const interests = [
        'Hiker',
        'Tech Nerd',
        'Craft Beer Enjoyer',
        'Movie Trivia Champion',
        'Music Lover',
        'Gamer'
    ]
    const [currentInterest, setCurrentInterest] = useState(interests[0])
    const indexRef = useRef(0)

    useEffect(() => {
        const intervalID = setInterval(() => {
            indexRef.current = (indexRef.current + 1) % interests.length;
            setCurrentInterest(interests[indexRef.current])
        }, 3000)
        return () => clearInterval(intervalID)
    }, [interests]);
    return (
        <div>
            <div>
                <h1>
                    Jacob Folsom
                </h1>
                <div>
                    <p>Fullstack Developer</p>
                    <div>
                        <div>
                            <p>and a</p>
                            <div>
                                <motion.div key={currentInterest}
                                            className='text-skin-accent'
                                            initial={{opacity: 0, y: '100%'}}
                                            animate={{ opacity: 1, y: '0%' }}
                                            exit={{ opacity: 0, y: '100%' }}
                                            transition={{ duration: 2 }}
                                        >
                                    {currentInterest}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Headercontent