<script lang="ts">
    import Bar from './Bar.svelte'
    import type {ISODate} from "../utils/dates";
    // TODO: make dailyMax to $derived!!??
    let {hourlyPrices, dailyMax, date}: { hourlyPrices: number[], dailyMax: number, date: ISODate} = $props()
    // TODO: tests for lines
    const priceLines =  $derived([
        {label: `${Math.round(dailyMax)} c/kWh`, top: '0%'},
        {label: `${Math.round(0.75 * dailyMax)} c/kWh`, top: '25%'},
        {label: `${Math.round(0.5 * dailyMax)} c/kWh`, top: '50%'},
        {label: `${Math.round(0.25 * dailyMax)} c/kWh`, top: '75%'},
        {label: `0 c/kWh`, top: '100%'}
    ])

</script>

<div class="outer-container">
<!--    <div class="baseline"></div>-->
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
        margin-left: -3em;
        margin-top: -0.2em;
    }

</style>
