import { z } from 'astro/zod';
import { AuthorSchema } from 'src/schemas/author';





export type AuthorConfig = z.infer<ReturnType<typeof AuthorSchema>>
export type AuthorInputConfig = z.input<ReturnType<typeof AuthorSchema>>