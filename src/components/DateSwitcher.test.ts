import {render, fireEvent, waitFor} from '@testing-library/svelte';
import {expect, test, describe, vi} from 'vitest'
import {nextDate, prevDate, today} from "../utils/dates";
import DateSwitcher from "./DateSwitcher.svelte";

describe('DateSwitcher.svelte', () => {
    test('on load shows today`s date', async () => {
        render(DateSwitcher)
        const {component} = render(DateSwitcher)
        expect(component.boundDate).to.eq(today)
    })

    test('can switch to previous date', async () => {
        const {container} = render(DateSwitcher, {date: '2024-11-07'})
        await fireEvent.click(container.querySelector('button')!)
        expect(container.querySelector('input')!.value).toBe('2024-11-06')
    })
    test('can switch to next date', async () => {
        const {container} = render(DateSwitcher, {date: '2024-11-07'})
        await fireEvent.click(container.querySelector('button:nth-of-type(2)')!)
        expect(container.querySelector('input')!.value).toBe('2024-11-08')
    })
})