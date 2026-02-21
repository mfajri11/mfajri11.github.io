import { defaultLang, ui } from './ui'

export const languages = Object.keys(ui) as (keyof typeof ui)[]

export { defaultLang }

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const isDefault = !showDefaultLang && l === defaultLang
    if (isDefault) return path
    return `/${l}${path === '/' ? '' : path}`
  }
}

export const showDefaultLang = false
