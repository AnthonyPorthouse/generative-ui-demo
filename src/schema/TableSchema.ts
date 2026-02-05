import z from "zod";
import { GenerativeSchemaBase } from "./GenerativeSchemaBase.js";
import { TableHeaderSchema } from "./TableHeaderSchema.js";
import { TableRowSchema } from "./TableRowSchema.js";

export const TableSchema = GenerativeSchemaBase.extend({
    type: z.literal('table'),
    props: z.strictObject({}),
    children: z.array(z.union([
        TableHeaderSchema,
        TableRowSchema,
    ])),
})
