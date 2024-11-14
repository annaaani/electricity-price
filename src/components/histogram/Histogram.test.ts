import {render} from '@testing-library/svelte';
import {describe, expect, test} from 'vitest'
import Histogram from './Histogram.svelte';
import type {ISODate} from "../../utils/dates";

describe('Histogram', () => {
    const hourlyPrices: number[] = [2.2, 1.9, 18, 7, -2.2, -1.3]
    const dailyMax: number = Math.max(...hourlyPrices);
    const date: ISODate = '2024-10-10'

    test('shows correctly highest line label', async () => {
        const {getByText} = render(Histogram, {hourlyPrices, dailyMax, date})
        expect(getByText('20')).toBeInTheDocument()
    });

    test('renders six price lines with correct labels', () => {
        const {container} = render(Histogram, {hourlyPrices, dailyMax, date});
        const expectedLabels = [`20`, `16`, `12`, `8`, `4`, '0'];

        const priceLines = container.querySelectorAll('.priceLineBlock');
        expect(priceLines.length).toBe(6);

        priceLines.forEach((line, index) => {
            const label = line.querySelector('.price-label')?.textContent;
            expect(label).toBe(expectedLabels[index]);
        });
    });
})