import React, { useState, useEffect } from 'react';

const EncryptEffect = ({ text, speed = 5, iterations = 3 }) => {
    const [displayedText, setDisplayedText] = useState(''.padStart(text.length, ' '));
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    useEffect(() => {
        const timeouts = [];

        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j <= iterations; j++) {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) =>
                        prev.substring(0, i) +
                        (j === iterations ? text[i] : characters.charAt(Math.floor(Math.random() * characters.length))) +
                        prev.substring(i + 1)
                    );
                }, j * speed * (i + 1));
                timeouts.push(timeout);
            }
        }

        return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }, [text, speed, iterations, characters.length]);

    return <code style={{ fontSize: 24 }}>{displayedText}</code>;
};

export default EncryptEffect;
