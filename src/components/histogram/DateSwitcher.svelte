<script lang="ts">
    import {checkMaxDate, type ISODate, nextDate, prevDate, today} from "../../utils/dates";

    let {date = $bindable(today)}: { date: ISODate } = $props()
    export {date as boundDate}

</script>
<div class="date-switcher">
    <button onclick={async () => date = await prevDate(date)}>&#60;&#60;</button>
    <input type="date" bind:value={date} max={today}>
    {#if checkMaxDate(date)}
        <button onclick={async () => date = await nextDate(date)}>&#62;&#62;</button>
    {:else}
        <button disabled>&#62;&#62;</button>
    {/if}
</div>

<style>
    .date-switcher {
        margin-left: -2.5em;
    }

    button {
        background-color: transparent;
        border: none;
    }

    input {
        padding: 0.4em;
    }
</style>