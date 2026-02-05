import { z } from 'zod';
import { GenerativeSchemaBase } from './GenerativeSchemaBase';
import { CardSchema } from './CardSchema';
import { ChartSchema } from './ChartSchema';
import { TableSchema } from './TableSchema';

export const ContainerSchema = GenerativeSchemaBase.extend({
    type: z.literal('container'),
    props: z.strictObject({}),
    children: z.array(z.union([CardSchema, ChartSchema, TableSchema])).max(1),
}).describe('A container that holds a single component.')
