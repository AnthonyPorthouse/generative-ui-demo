import { z } from 'zod';
import { GenerativeSchemaBase } from './GenerativeSchemaBase.js';
import { CardSchema } from './CardSchema.js';
import { ChartSchema } from './ChartSchema.js';

export const CarouselSchema = GenerativeSchemaBase.extend({
    type: z.literal('carousel'),
    props: z.strictObject({}),
    children: z.array(z.union([CardSchema, ChartSchema])),
}).describe('A carousel layout of many components.')
