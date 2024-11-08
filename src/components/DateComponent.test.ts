import {render, fireEvent, waitFor} from '@testing-library/svelte';
import {expect, test, describe, vi} from 'vitest'
import DateComponent from './DateComponent.svelte';
import {today} from "../utils/dates";

describe('DateComponent.svelte', () => {
    test('on load shows today`s date', async () => {
        render(DateComponent)
        const {component} = render(DateComponent)
        expect(component.boundDate).to.eq(today)
    })


    // test('can switch to previous date', async () => {
    //     const {container} = render(DateSwitcher, {date: '2024-11-07'})
    //     await fireEvent.click(container.querySelector('button')!)
    //     expect(container.querySelector('input')!.value).toBe('2024-11-06')
    // })
    // test('can switch to next date', async () => {
    //     const {container} = render(DateSwitcher, {date: '2024-11-07'})
    //     await fireEvent.click(container.querySelector('button')!)
    //     expect(container.querySelector('input')!.value).toBe('2024-11-08')
    // })
})