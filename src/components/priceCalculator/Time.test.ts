import {fireEvent, render} from '@testing-library/svelte';
import {describe, expect, test} from 'vitest'
import Time from "./Time.svelte";

describe('Time.svelte', () => {
    test('`3h` is activated by default for vacuum', async () => {
        const {container} = render(Time, undefined)
        let defaultInput = container.querySelector("input[type=text]") as HTMLInputElement
        expect(defaultInput.value).toBe('3h')
    })

    test('change duration for vacuum', async () => {
        const {container} = render(Time, {duration:2})
        let defaultInput = container.querySelector("input[type=text]") as HTMLInputElement
        expect(defaultInput.value).toBe('2h')
    })
})