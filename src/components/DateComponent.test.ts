import {render, fireEvent, waitFor} from '@testing-library/svelte';
import {expect, test, describe, vi} from 'vitest'
import DateComponent from './DateComponent.svelte';

describe('DateComponent.svelte', () => {

    test('on load shows today`s date', async () => {
        render(DateComponent)
        const {component} = render(DateComponent)
        // @ts-ignore
        expect(new Date().toISOString().split("T")[0]).to.eq(component.date)
    });
})