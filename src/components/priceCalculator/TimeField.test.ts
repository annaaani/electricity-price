import {fireEvent, render} from '@testing-library/svelte';
import {describe, expect, test} from 'vitest'
import Time from "./TimeField.svelte";

describe('TimeField.svelte', () => {
    test('`3h` is activated by default for vacuum', async () => {
        const {container} = render(Time, {duration: 3})
        let defaultInput = container.querySelector('input')!
        expect(defaultInput.value).toBe('3')
    })

    test('change duration for vacuum', async () => {
        const {container} = render(Time, {duration: 3})
        let input = container.querySelector('input')!
        await fireEvent.change(input, {target: {value: 2}});
        expect(input.value).toBe('2')
    })
})