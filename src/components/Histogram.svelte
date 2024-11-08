<script lang="ts">
    import Bar from './Bar.svelte'

    let {hourlyPrices, hours}: { hourlyPrices: number[], hours: string[] } = $props()
    // TODO: tests
    // TODO: create a function to get highest of the day to adjust the barchart height
</script>

<div class="barchart">
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
        min-height: 600px;
        overflow: hidden;
        padding: 2em;
        background-color: rgba(240, 240, 240, 0.5);
    }
</style>
