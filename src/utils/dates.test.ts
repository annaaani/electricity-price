import {describe, expect, test} from 'vitest';
import {checkMaxDate, type ISODate, today} from './dates';

describe('dates.ts', () => {
    test('should return true if date is before maxDate', async () => {
        const dateBeforeMax = '2024-11-10';
        expect(checkMaxDate(dateBeforeMax)).to.eq(true)
    })

    test('should return false if date is before maxDate', async () => {
        const nextYear = new Date().getFullYear() + 1;
        const dateAfterMax = `${nextYear}-11-12`;
        expect(checkMaxDate(<ISODate>dateAfterMax)).to.eq(false)
    })

    test('today should be the current date in ISODate format', () => {
        const todayDate = new Date().toISOString().split('T')[0];
        expect(today).toBe(todayDate);
    })
})
