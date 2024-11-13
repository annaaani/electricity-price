import type en from './en.json'
import langs from './langs.json'

const navLanguage = navigator.language.split("-")[0]
export const lang = langs.includes(localStorage['lang']) ? localStorage['lang'] : (langs.includes(navLanguage) ? navLanguage : langs[0]);

export async function changeLang(lang: typeof langs[number]) {
    localStorage['lang'] = lang
    location.reload()
}

export let t: typeof en = await import(`./${lang}.json`)
