import { z } from 'zod';
import { GenerativeSchemaBase } from './GenerativeSchemaBase';
import { CardSchema } from './CardSchema';
import { ChartSchema } from './ChartSchema';

export const GridSchema = GenerativeSchemaBase.extend({
    type: z.literal('grid'),
    props: z.strictObject({}),
    children: z.array(z.union([CardSchema, ChartSchema])),
}).describe('A grid layout of many components.')
