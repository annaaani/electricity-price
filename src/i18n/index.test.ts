import {describe, expect, test, vi} from "vitest"
import {changeLang} from "./"
import langs from "./langs.json"


describe('changeLang', () => {
    test('should set the correct langCode in localStorage', () => {
        localStorage.clear()
        vi.stubGlobal('location', {reload: vi.fn()})
        const lang: typeof langs[0] = 'et'

        changeLang(lang)

        expect(localStorage['lang']).toEqual('et')
        expect(location.reload).toHaveBeenCalled()
    })

    test('should change the language in localStorage and reload the page', () => {
        localStorage.clear()
        vi.stubGlobal('location', {reload: vi.fn()})

        changeLang(langs[1])
        expect(localStorage['lang']).toEqual('et')
        expect(location.reload).toHaveBeenCalled()

        changeLang('en')
        expect(localStorage['lang']).toEqual('en')
    })
})
