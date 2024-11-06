import { render, fireEvent } from '@testing-library/svelte';
import {expect, test, describe} from 'vitest'
import Bar from '../components/Bar.svelte';

describe('Bar.svelte', () => {
    test('renders time and price correctly', async () => {
        const { getByText } = render(Bar, {
            props: {
                time: '12:00',
                price: 10,
            },
        });

        getByText('12:00');
        getByText('10 c/KWh');
    });

    test('sets the correct height based on price', async () => {
        const { container } = render(Bar, {
            props: {
                time: '12:00',
                price: 10,
            },
        });

        const box = container.querySelector('.box');

        expect(box).toHaveStyle('height: 11em');
    });
});
