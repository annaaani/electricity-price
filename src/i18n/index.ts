import type en from './en.json'
import langs from './langs.json'

export type Lang = typeof langs[number]

export function detectLang() {
    const navLanguage = navigator.language.split("-")[0]
    const lStorage = localStorage['lang']
    return langs.includes(lStorage) ? lStorage : (langs.includes(navLanguage) ? navLanguage : langs[0]);
}

export const lang = detectLang();

export async function changeLang(lang: Lang) {
    localStorage['lang'] = lang
    location.reload()
}

export let t: typeof en = (await import(`./${lang}.json`)).default
