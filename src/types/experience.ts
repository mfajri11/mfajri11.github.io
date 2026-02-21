import type { z } from 'astro:content'
import type { ExperienceSchema } from 'src/schemas/experience'

export type ExperienceConfig = z.infer<ReturnType<typeof ExperienceSchema>>
