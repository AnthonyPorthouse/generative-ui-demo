import z from "zod";
import { GenerativeSchemaBase } from "./GenerativeSchemaBase.js";

export const TableRowSchema = GenerativeSchemaBase.extend({
    type: z.literal('tableRow'),
    props: z.strictObject({
        values: z.array(z.string()),
    }),
    children: z.array(z.object({})).max(0),
})