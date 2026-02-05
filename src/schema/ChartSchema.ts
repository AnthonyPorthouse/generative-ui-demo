import { z } from 'zod';
import { GenerativeSchemaBase } from './GenerativeSchemaBase.js';

export const ChartSchema = GenerativeSchemaBase.extend({
    type: z.literal('chart'),
    props: z.strictObject({
        data: z.array(z.number()),
        labels: z.array(z.string()),
    }),
    children: z.array(z.object({})).max(0),
})
