import { z } from 'zod';
import { GenerativeSchemaBase } from './GenerativeSchemaBase.js';
import { CardSchema } from './CardSchema.js';
import { ChartSchema } from './ChartSchema.js';
import { TableSchema } from './TableSchema.js';

export const ContainerSchema = GenerativeSchemaBase.extend({
    type: z.literal('container'),
    props: z.strictObject({}),
    children: z.array(z.union([CardSchema, ChartSchema, TableSchema])).max(1),
}).describe('A container that holds a single component.')
