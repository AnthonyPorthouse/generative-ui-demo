import { Box, Text, useApp, useInput } from "ink";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";
import Spinner from "ink-spinner";
import React, { useCallback, useState } from "react";
import { generateUiResponse } from "../services/ai";

function Tui() {
    
    const [response, setResponse] = useState("");
    const [thinking, setThinking] = useState(false);

    const submitQuery = useCallback(async (query: string) => {
        setThinking(true);
        const result = await generateUiResponse(query);
        
        for await (const chunk of result.partialOutputStream) {
            setThinking(false);
            setResponse(JSON.stringify(chunk, null, 2));
        }
    }, [setResponse, setThinking]);

    const { exit } = useApp();

    useInput((input, key) => {
        if (key.escape) {
            exit();
        }
    })

    return (
        <Box flexDirection="column" gap={1} height="100%">
            <UserInput onSubmit={submitQuery} />
            {thinking && <Text><Text color="green"><Spinner type="dots" /></Text>{' Thinking'}</Text>}
            {response !== "" && <UserOutput output={response} />}
        </Box>
    )
}

export default Tui;