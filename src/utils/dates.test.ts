import { describe, expect, test, vi } from 'vitest';
import { today, maxDate, toISODate, prevDate, nextDate, checkMaxDate } from './dates';

test('should return true if date is before maxDate', async ()=> {
    const dateBeforeMax = '2024-11-09' as const;
    expect(checkMaxDate(dateBeforeMax)).to.eq(false)
})
    test('today should be the current date in ISODate format', () => {
        const todayDate = new Date().toISOString().split('T')[0];
        expect(today).toBe(todayDate);
    });
