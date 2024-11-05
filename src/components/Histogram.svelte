<script lang="ts">
    import {convertTimestamp} from "../utils/convertTimestamp";
    import Bar from './Bar.svelte'
    import {convertPriceMWhToSKWh} from "../utils/convertPriceMWhToSKWh.js";

    export let data;
</script>


<!--<pre>{JSON.stringify(data, null, 2)}</pre>-->

{#each data as d}
    <p>
        {convertTimestamp(d.timestamp)}
        {convertPriceMWhToSKWh(d.price)}
    </p>
{/each}


<Bar />

<style>

</style>
