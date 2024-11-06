import { expect, test } from "vitest";
import {fetchUrl} from "./loader";

test('fetches full day of prices with correct UTC timestamps', () => {
    expect(fetchUrl('2024-11-06')).to.eq('https://dashboard.elering.ee/api/nps/price?start=2024-11-05T22:00:00.000Z&end=2024-11-06T21:59:00.000Z')
})
