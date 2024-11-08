<script lang="ts">
    import Bar from './Bar.svelte'

    let {hourlyPrices, hours, dailyMax}: { hourlyPrices: number[], hours: string[], dailyMax: number } = $props()
    // TODO: tests
    // TODO: add lines
</script>

<div class="barchart" style="height:{dailyMax*1.2}em;">
    {#each hourlyPrices as hp, i}
        <Bar
                time={hours[i]}
                price={hp}
        />
    {/each}
</div>

<style>
    .barchart {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        justify-content: center;
        align-items: flex-end;
        flex-wrap: wrap;
        height: 600px;
        overflow: hidden;
        padding: 2em;
        background-color: rgba(240, 240, 240, 0.5);
    }
</style>
