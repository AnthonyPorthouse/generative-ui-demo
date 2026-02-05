import { z } from 'zod';
import { GenerativeSchemaBase } from './GenerativeSchemaBase.js';
import { CardSchema } from './CardSchema.js';
import { ChartSchema } from './ChartSchema.js';

export const GridSchema = GenerativeSchemaBase.extend({
    type: z.literal('grid'),
    props: z.strictObject({}),
    children: z.array(z.union([CardSchema, ChartSchema])),
}).describe('A grid layout of many components.')
