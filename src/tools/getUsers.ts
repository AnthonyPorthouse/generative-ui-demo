import { tool } from "ai";
import z from "zod";

export const getUsers = tool({
    description: "Get a list of users, with their job titles. Can be filtered by a search query.",
    inputSchema: z.object({
        query: z.object({
            name: z.string().optional(),
            title: z.string().optional(),
        }).optional(),
    }),
    execute: async ({ query }): Promise<{id: number, name: string, title: string}[]> => {
        // In a real application, you would fetch this data from a database
        const users = [
            { id: 1, name: "Anthony", title: "Senior Software Engineer II" },
            { id: 2, name: "Steve", title: "Engineering Manager" },
            { id: 3, name: "Ronan", title: "Senior Software Engineer I" },
        ];

        if (query) {
            return users.filter(user =>
                user.title.toLowerCase().includes(query.title?.toLowerCase() ?? "") ||
                user.name.toLowerCase().includes(query.name?.toLowerCase() ?? "")
            );
        }

        return users;
    }

})