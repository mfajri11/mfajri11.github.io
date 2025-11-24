import { z } from 'astro/zod'

export const ExperienceSchema = () => 
    z.object({
        organization: z.string(),
        location: z.string(),
        activities: z.object({
            period: z.string(),
            label:  z.string(),
            description: z.string().optional(),
            descriptions: z.string().array().optional().default([])
        }).array()
    })

