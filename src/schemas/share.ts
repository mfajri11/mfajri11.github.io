import { z } from 'astro/zod'

export const shareList = ['x', 'instagram', 'linkedin', 'facebook', 'whatsapp'] as const

export const SocialShareKey = () =>
  z
    .array(z.enum(shareList))
    .default([])
    .describe('Options for sharing content on social media platforms.')

export const SocialShareRecord = () =>
  z.record(z.enum(shareList), z.object({ link: z.string().url() }))
