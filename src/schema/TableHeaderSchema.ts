import z from "zod";
import { GenerativeSchemaBase } from "./GenerativeSchemaBase";

export const TableHeaderSchema = GenerativeSchemaBase.extend({
    type: z.literal('tableHeader'),
    props: z.strictObject({
        headers: z.array(z.string()),
    }),
    children: z.array(z.object({})).max(0),
})