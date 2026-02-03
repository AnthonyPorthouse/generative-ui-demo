import { z } from 'zod';

const GenerativeSchemaBase = z.strictObject({
    type: z.string(),
    props: z.object(),
    children: z.array(z.object({})).max(0),
})

const CardSchema = GenerativeSchemaBase.extend({
    type: z.literal('card'),
    props: z.strictObject({
        title: z.string(),
        content: z.string(),
    }),
    children: z.array(z.object({})).max(0),
})

const ChartSchema = GenerativeSchemaBase.extend({
    type: z.literal('chart'),
    props: z.strictObject({
        data: z.array(z.number()),
        labels: z.array(z.string()),
    }),
    children: z.array(z.object({})).max(0),
})

const ContainerSchema = GenerativeSchemaBase.extend({
    type: z.literal('container'),
    props: z.strictObject({}),
    children: z.array(z.union([CardSchema, ChartSchema])).max(1),
}).describe('A container that holds a single component.')

const GridSchema = GenerativeSchemaBase.extend({
    type: z.literal('grid'),
    props: z.strictObject({}),
    children: z.array(z.union([CardSchema, ChartSchema])),
}).describe('A grid layout of many components.')

const CarouselSchema = GenerativeSchemaBase.extend({
    type: z.literal('carousel'),
    props: z.strictObject({}),
    children: z.array(z.union([CardSchema, ChartSchema])),
}).describe('A carousel layout of many components.')

export const RootSchema = GenerativeSchemaBase.extend({
    type: z.literal('root'),
    props: z.strictObject({}),
    children: z.array(z.union([ContainerSchema, GridSchema, CarouselSchema])).max(1),
})