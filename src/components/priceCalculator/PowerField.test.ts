import {fireEvent, render} from '@testing-library/svelte';
import {describe, expect, test} from 'vitest'
import PowerField from "./PowerField.svelte";

describe('TimeField.svelte', () => {
    test('`800` is loaded by default for vacuum', async () => {
        const {container} = render(PowerField, {watts: 800})
        let defaultInput = container.querySelector('input')!
        expect(defaultInput.value).toBe('800')
    })

    test('change watts for vacuum', async () => {
        const {container} = render(PowerField, {watts: 800})
        let input = container.querySelector('input')!
        await fireEvent.change(input, {target: {value: 600}});
        expect(input.value).toBe('600')
    })
})