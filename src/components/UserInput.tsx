import { Box, Text, useInput } from "ink";
import React, { useState } from "react";

function UserInput({ onSubmit }: { onSubmit: (query: string) => void }) {
    const [input, setInput] = useState("");

    useInput((char, key) => {
        if (key.delete) {
            setInput(input.slice(0, -1));
            return;
        }
        
        if (key.return) {
            // Handle enter key
            onSubmit(input);
            // setInput("");
            return;
        }

        setInput(input + char);
    });

    return (
        <Box borderStyle="round" borderColor="blueBright" width="100%">
            <Text>User: {input}</Text>
        </Box>
    )
}

export default UserInput;