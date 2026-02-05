import { z } from 'zod';
import { GenerativeSchemaBase } from './GenerativeSchemaBase.js';

export const CardSchema = GenerativeSchemaBase.extend({
    type: z.literal('card'),
    props: z.strictObject({
        title: z.string(),
        content: z.string(),
    }),
    children: z.array(z.object({})).max(0),
})
