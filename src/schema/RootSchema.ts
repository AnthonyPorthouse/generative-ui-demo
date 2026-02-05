import { z } from 'zod';
import { GenerativeSchemaBase } from './GenerativeSchemaBase.js';
import { ContainerSchema } from './ContainerSchema.js';
import { GridSchema } from './GridSchema.js';
import { CarouselSchema } from './CarouselSchema.js';

export const RootSchema = GenerativeSchemaBase.extend({
    type: z.literal('root'),
    props: z.strictObject({}),
    children: z.array(z.union([ContainerSchema, GridSchema, CarouselSchema])).max(1),
})
