import { Output, streamText } from "ai";
import { RootSchema } from "../schema/base";
import { azure } from "@ai-sdk/azure";

export async function generateUiResponse(prompt: string) {
    const model = azure.chat('gpt-5-mini');
    
    const response = await streamText({
        system: "You are an expert UI/UX designer. Given a user prompt, you will generate a response representing a user interface layout.",
        prompt: prompt,
        model: model,
        output: Output.object({
            schema: RootSchema,
        }),
        providerOptions: {
            openai: {
                reasoningEffort: 'high',
                reasoningSummary: 'auto',
                strictJsonSchema: true,
            }
        }
    })

    return response;
}   