import React, { useEffect } from "react";
import { Text } from "ink";
import Spinner from "ink-spinner";

function Thinking() {

    const messages = [
        "Thinking",
        "Reticulating Splines",
        "Asking the Magic 8 Ball",
        "Questioning Life Choices",
        "Consulting the Oracle",
        "Aligning the Stars",
        "Summoning the AI Spirits",
        "Calculating the Meaning of Life",
        "Polishing the Crystal Ball",
        "Deciphering Ancient Runes",
        "Interpreting the Tea Leaves",
        "Consulting the AI Council",
        "Running Complex Algorithms",
        "Tuning the Hyperparameters",
        "Optimizing the Neural Networks",
        "Transmuting Data into Wisdom",
        "Scrying the Digital Future",
        "Herding the AI Cats",
        "Decoding the AI Enigma",
        "Navigating the AI Labyrinth",
    ]

    const [message, setMessage] = React.useState(messages[Math.floor(Math.random()*messages.length)]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessage(messages[Math.floor(Math.random()*messages.length)]);
        }, 3000);
        return () => clearInterval(interval);
    }, [messages, setMessage])

    return (
        <Text>
            <Text color="green"><Spinner type="dots" /></Text>
            {' '}{message}
        </Text>
    )
}

export default Thinking;