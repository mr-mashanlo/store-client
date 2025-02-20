import { z } from 'zod';

import { CategoryResponseSchema } from './schema';

export type CategoryResponseType = z.infer<typeof CategoryResponseSchema>;