import {fireEvent, render} from '@testing-library/svelte';
import {describe, expect, test} from 'vitest'
import CountrySwitcher from "./CountrySwitcher.svelte";

describe('CountrySwitcher.svelte', () => {
    test('`ee` is activated by default', async () => {
        const {container} = render(CountrySwitcher)
        let countryInput = container.querySelector('input:checked') as HTMLInputElement
        expect(countryInput.value).toBe('ee')
    })

    test('can switch country', async () => {
        const {container} = render(CountrySwitcher, {country: 'fi'})
        const defaultRadio = container.querySelector('input:checked') as HTMLInputElement
        expect(defaultRadio.value).toBe('fi')

        let lvRadio = container.querySelector('input[value=lv]') as HTMLInputElement
        await fireEvent.click(lvRadio)
        expect(lvRadio.checked).toBe(true)
    })
})