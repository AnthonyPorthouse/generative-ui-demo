import { z } from 'zod';
import { GenerativeSchemaBase } from './GenerativeSchemaBase';
import { CardSchema } from './CardSchema';
import { ChartSchema } from './ChartSchema';

export const CarouselSchema = GenerativeSchemaBase.extend({
    type: z.literal('carousel'),
    props: z.strictObject({}),
    children: z.array(z.union([CardSchema, ChartSchema])),
}).describe('A carousel layout of many components.')
