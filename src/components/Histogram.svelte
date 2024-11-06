<script lang="ts">
    import Bar from './Bar.svelte'
    import {convertTimestamp} from "../utils/convertTimestamp";
    import {convertPriceMWhToSKWh} from "../utils/convertPriceMWhToSKWh.js";

    export let hourlyPrices; // TODO: type & name
    export let hours; // TODO: type & name
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
