import {fireEvent, render} from '@testing-library/svelte';
import {describe, expect, it, test} from 'vitest'
import StartTimeField from "./StartTimeField.svelte"

describe('StartTimeField.svelte', () => {
    test('starts on next hour', async () => {
        const {container} = render(StartTimeField, {startTime: 16})
        let defaultInput = container.querySelector('input')!
        expect(defaultInput.value).toBe('16')
    })

    test('can change start', async () => {
        const {container} = render(StartTimeField, {startTime: 16})
        let input = container.querySelector('input')!
        await fireEvent.change(input, {target: {value: 18}});
        expect(input.value).toBe('18')
    })
})