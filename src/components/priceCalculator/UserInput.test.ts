import {fireEvent, render} from '@testing-library/svelte';
import {describe, expect, test} from 'vitest'
import UserInput from "./UserInput.svelte";
import EnergyUsage from "./EnergyUsage.svelte";
import {t} from "../../i18n";

describe('UserInput.svelte', () => {
    test('default values are loaded by default for vacuum', async () => {
        const {container} = render(UserInput, {value: 3, label:t.duration, unit:t.hour, minValue:0, maxValue:23})
        let defaultInput = container.querySelector('input')!
        const label = container.querySelector('p')!.textContent
        expect(defaultInput.value).toBe('3')
        expect(defaultInput.min).toBe('0')
        expect(defaultInput.max).toBe('23')
        expect(label).toEqual(t.duration)
    })
    test('change device loads correct default values', async () => {
        const {container} = render(UserInput, {value: 3, label:t.duration, unit:t.hour, minValue:0, maxValue:23})
        let input = container.querySelector('input')!
        await fireEvent.change(input, {target: {value: 2}});
        const label = container.querySelector('p')!.textContent
        expect(input.value).toBe('2')
        expect(input.min).toBe('0')
        expect(input.max).toBe('23')
        expect(label).toEqual(t.duration)
    })
})