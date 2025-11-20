import { z } from 'astro/zod';



import { ExperienceSchema } from './experience';
import { ShareSchema } from './share';


export const AuthorSchema = () =>
  z.object({
    author: z.string().transform((val) => {
      const trimmed = val.trim()
      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
    }),
    email: z
      .string()
      .email()
      .transform((val) => val.toLowerCase()),
    programmingLanguages: z.string().array().optional().default([]),
    techSkills: z.string().array().optional().default([]),
    phoneNumber: z.string().optional(),
    shareToSocials: ShareSchema(),
    experiences: z.array(ExperienceSchema())
  })