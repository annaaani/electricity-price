import type en from './en.json'
import langs from './langs.json'

const navLanguage = navigator.language.split("-")[0] // todo: WHAT IF i AM COMING FROM jAPAN?
export const lang = localStorage['lang'] ?? navLanguage ?? langs[0]

export function changeLang(lang: typeof langs[number]) {
    localStorage['lang'] = lang
    location.reload()
}

export let t: typeof en = await import(`./${lang}.json`)
