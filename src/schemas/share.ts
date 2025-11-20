import { z } from 'astro/zod'

export const shareList = ['x', 'instagram', 'linkedin', 'facebook', 'whatsapp'] as const

export const ShareSchema = () =>
  z.array(z.enum(shareList))
    .default([])
    .describe('Options for sharing content on social media platforms.')
