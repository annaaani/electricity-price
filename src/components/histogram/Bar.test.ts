import {render} from '@testing-library/svelte';
import {describe, expect, test} from 'vitest'
import Bar from './Bar.svelte';

describe('Bar', () => {

    test('renders time and price correctly', async () => {
        const {getByText} = render(Bar, {
            dailyMax: 20,
            time: 12,
            price: 10,
            date: `${2024}-${10}-${5}`
        });

        expect(getByText('12')).toBeInTheDocument();
        expect(getByText('10 c/kWh')).toBeInTheDocument();
    });

    test('sets the correct height based on price', async () => {
        const {container} = render(Bar, {
            dailyMax: 20,
            time: 12,
            price: 10,
            date: `${2024}-${10}-${5}`
        });
        const expectedHeight = 10 / 20 * 100

        const box = container.querySelector('.bg');

        expect(box).toHaveStyle(`height: ${Math.abs(expectedHeight)}%`);
    });

    test('renders negative price and height correctly', async () => {
        const {getByText, container} = render(Bar, {
            dailyMax: 20,
            time: 12,
            price: -10,
            date: `${2024}-${10}-${5}`
        });
        const expectedHeight = Math.abs(-10 / 20 * 100)

        const bar = container.querySelector('.bg') as HTMLElement;

        expect(getByText('12')).toBeInTheDocument();
        expect(getByText('-10 c/kWh')).toBeInTheDocument();
        expect(bar).toHaveStyle(`height: ${expectedHeight}%`);
        expect(bar.classList).toContain('negative');
    });
});
