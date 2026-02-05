import { Box, useApp, useInput } from "ink";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";
import React, { useCallback, useState } from "react";
import { generateUiResponse } from "../services/ai";
import Thinking from "./Thinking";

function Tui() {
    
    const [response, setResponse] = useState("");
    const [thinking, setThinking] = useState(false);

    const submitQuery = useCallback(async (query: string) => {
        setThinking(true);
        setResponse("");
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
            {thinking && <Thinking />}
            {response !== "" && <UserOutput output={response} />}
        </Box>
    )
}

export default Tui;