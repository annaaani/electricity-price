import {describe, expect, test} from "vitest";
import {roundUpToNearest5} from "./roundUpToNearest5";

describe('roundUpToNearest5', () => {
    test('if rounds up to nearest five', async () => {
        const example = 18.4;
        expect(roundUpToNearest5(example)).to.eq(20)
    })
})