import type { z } from 'astro:content';
import type { SocialShareRecord } from 'src/schemas/share'





export type SocialShareRecord = z.infer<ReturnType<typeof SocialShareRecord>>