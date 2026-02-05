import { z } from 'zod';

export const GenerativeSchemaBase = z.strictObject({
    type: z.string(),
    props: z.object(),
    children: z.array(z.object({})).max(0),
})
