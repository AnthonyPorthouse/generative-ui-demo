import z from "zod";
import { GenerativeSchemaBase } from "./GenerativeSchemaBase";
import { TableHeaderSchema } from "./TableHeaderSchema";
import { TableRowSchema } from "./TableRowSchema";

export const TableSchema = GenerativeSchemaBase.extend({
    type: z.literal('table'),
    props: z.strictObject({}),
    children: z.array(z.union([
        TableHeaderSchema,
        TableRowSchema,
    ])),
})
