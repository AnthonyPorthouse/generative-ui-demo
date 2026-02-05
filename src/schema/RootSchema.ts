import { z } from 'zod';
import { GenerativeSchemaBase } from './GenerativeSchemaBase';
import { ContainerSchema } from './ContainerSchema';
import { GridSchema } from './GridSchema';
import { CarouselSchema } from './CarouselSchema';

export const RootSchema = GenerativeSchemaBase.extend({
    type: z.literal('root'),
    props: z.strictObject({}),
    children: z.array(z.union([ContainerSchema, GridSchema, CarouselSchema])).max(1),
})
