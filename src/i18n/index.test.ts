import {afterEach, describe, expect, it, vi} from "vitest"
import {changeLang, t} from "./"
import en from './en.json'

describe('changeLang', () => {
    afterEach(() => {
        localStorage.clear()
    })

    it('loads dictionary of the selected language', () => {
        expect(t).to.deep.equal(en)
    })

    it('uses user-preferred language configured in the browser', () => {
        // TODO
    })

    it('uses previously memorized language', () => {
        // TODO
    })

    it('falls back to default language if user provides an unsupported one', () => {
        // TODO
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
