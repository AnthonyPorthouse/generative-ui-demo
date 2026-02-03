import { Box, Text } from "ink";

import React from "react";

function UserOutput({output}: { output: string }) {
    return (
        <Box flexDirection="column" width="100%"  paddingX={ 2 }>
            <Text>AI:</Text>
            <Text>{output}</Text>
        </Box>
    )
}

export default UserOutput;