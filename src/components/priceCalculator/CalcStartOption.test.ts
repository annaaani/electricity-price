import {fireEvent, render} from '@testing-library/svelte';
import {describe, expect, it, test} from 'vitest'
import CalcStartOption from "./CalcStartOption.svelte"

describe('CalcStartOption.svelte', () => {
    test('starts on next hour', async () => {
        const {container} = render(CalcStartOption, {startTime: 16})
        let defaultInput = container.querySelector('input')!
        expect(defaultInput.value).toBe('16')
    })

    test('can change start', async () => {
        const {container} = render(CalcStartOption, {startTime: 16})
        let input = container.querySelector('input')!
        await fireEvent.change(input, {target: {value: 18}});
        expect(input.value).toBe('18')
    })
    
    test('can not change start to past nor current ongoing hour', async () => {
        const {container} = render(CalcStartOption, {startTime: 16})
        let input = container.querySelector('input')!
        await fireEvent.change(input, {target: {value: 10}});
        expect(input.value).not.toBe('10')
    })
})