import {afterEach, describe, expect, it, vi} from "vitest"
import {changeLang, detectLang, t} from "./"
import en from './en.json'

describe('changeLang', () => {
    afterEach(() => {
        localStorage.clear()
    })

    it('loads dictionary of the selected language', () => {
        expect(t).to.deep.equal(en)
    })

    it('uses user-preferred language configured in the browser', () => {
        localStorage['lang'] = 'et'
        const result = detectLang()
        expect(result).toBe('et')
    })

    it('uses previously memorized language', () => {
        localStorage['lang'] = 'et'
        vi.stubGlobal('location', {reload: vi.fn()})

        const result = detectLang()
        expect(result).toBe('et')
    })

    it('falls back to default language if user provides an unsupported one', () => {
        vi.spyOn(navigator, 'language', 'get').mockReturnValue('fr')
        const result = detectLang()
        expect(result).toBe('en')
    })

    it('should memorize changed language', () => {
        vi.stubGlobal('location', {reload: vi.fn()})

        changeLang('et')
        expect(localStorage['lang']).toEqual('et')
        expect(location.reload).toHaveBeenCalled()

        changeLang('en')
        expect(localStorage['lang']).toEqual('en')
        expect(location.reload).toHaveBeenCalled()
    })
})
