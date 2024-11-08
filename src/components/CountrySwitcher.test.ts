import {fireEvent, render} from '@testing-library/svelte';
import {describe, expect, test} from 'vitest'
import CountrySwitcher from "./CountrySwitcher.svelte";

describe('CountrySwitcher.svelte', () => {
    test('check that `ee` is activated on load', async () => {
        // @ts-ignore
        const {container} = render(CountrySwitcher, 'ee')
        let countryInput = container.querySelector('input');
        expect(countryInput).toBeInTheDocument();
        expect(countryInput!.value).toBe('ee')
    })
    test('check another country is active after switch', async () => {
        // @ts-ignore
        const {container} = render(CountrySwitcher, 'ee')
        let countryInput = container.querySelector('input');
        await fireEvent.input(countryInput!, {target: {value: 'lv'}});
        expect(countryInput!.value).toBe('lv')
    })
})