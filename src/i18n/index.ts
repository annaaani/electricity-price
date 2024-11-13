import type en from './en.json'
import langs from './langs.json'

const navLanguage = navigator.language.split("-")[0]
const localStorageLang = localStorage['lang'] in langs ? localStorage['lang'] : null
export const lang = localStorageLang ?? navLanguage ?? langs[0]

export function changeLang(lang: typeof langs[number]) {
    localStorage['lang'] = lang
    location.reload()
}

export let t: typeof en = await import(`./${lang}.json`)
