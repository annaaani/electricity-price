<script lang="ts">
    import {convertTimestamp} from "../utils/convertTimestamp";
    import Bar from './Bar.svelte'
    import {convertPriceMWhToSKWh} from "../utils/convertPriceMWhToSKWh.js";

    export let data;
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
        height: 200px;
        overflow: hidden;
    }
</style>
