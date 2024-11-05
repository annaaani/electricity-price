<script lang="ts">
    import {convertTimestamp} from "../utils/convertTimestamp";
    import Bar from './Bar.svelte'
    import {convertPriceMWhToSKWh} from "../utils/convertPriceMWhToSKWh.js";

    export let data;
    // TODO : time below
    // TODO : price on hower
    // todo: map bottom same place
</script>


<div class="barchart">

    {#each data as d}
        <Bar time={convertTimestamp(d.timestamp)} price={convertPriceMWhToSKWh(d.price)}/>

    {/each}
</div>


<style>
    .barchart {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        justify-content: flex-start;
        align-items: flex-end;
        flex-wrap: wrap;
        height: 100%;
        overflow: hidden;
    }
</style>
