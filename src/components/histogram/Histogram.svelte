<script lang="ts">
    import Bar from './Bar.svelte'
    import type {ISODate} from "../../utils/dates";
    import {roundUpToNearest5} from "../../utils/roundUpToNearest5";
    import {t} from "../../i18n"

    let {hourlyPrices, dailyMax, date}: { hourlyPrices: number[], dailyMax: number, date: ISODate } = $props()
    const priceLines = $derived([
        {label: `${roundUpToNearest5(dailyMax)}`, top: '0%'},
        {label: `${0.8 * roundUpToNearest5(dailyMax)}`, top: '20%'},
        {label: `${0.6 * roundUpToNearest5(dailyMax)}`, top: '40%'},
        {label: `${0.4 * roundUpToNearest5(dailyMax)}`, top: '60%'},
        {label: `${0.2 * roundUpToNearest5(dailyMax)}`, top: '80%'},
        {label: `0`, top: '100%'}
    ])

</script>
<div class="outer-container">
    <p class="conversion-heading">{t.units.cent}/{t.units.kiloWattHour}</p>
    <div class="barchart">
        {#each priceLines as line}
            <div class="priceLineBlock" style="top: {line.top};">
                <div class="line">
                    <p class="price-label">{line.label}</p>
                </div>
            </div>
        {/each}

        {#each hourlyPrices as hp, i}
            <Bar
                    time={i}
                    price={hp}
                    {dailyMax}
                    {date}
            />
        {/each}
    </div>
</div>

<style>
    .outer-container {
        margin-left: 3em;
        position: relative;
        height: 30em;
        background-color: rgba(240, 240, 240, 0.5);
    }

    .barchart {
        position: absolute;
        inset: 2em 0;
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        justify-content: center;
        align-items: flex-end;
        flex-wrap: wrap;
    }

    .priceLineBlock {
        display: flex;
        flex-direction: row;
        position: absolute;
        width: 100%;
        align-items: center;
    }

    .line {
        height: 1px;
        border-top: 1px dotted gray;
        width: 100%;
        text-align: left;
    }

    .price-label {
        margin-left: -1.5em;
        margin-top: -0.8em;
    }

    .conversion-heading {
        padding-top: 0.2em;
        text-align: center;
    }

</style>
