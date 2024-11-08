<script lang="ts">
    import {prevDate, nextDate, maxDate, today, checkMaxDate, type ISODate} from "../utils/dates";

    let {date = $bindable(today)}: { date: ISODate } = $props()

    export {date as boundDate}
</script>
<div>
    <button onclick={async () => date = await prevDate(date)}>&#60;&#60;</button>
    <input type="date" bind:value={date} max={maxDate}>
    <button onclick={async () => date = await nextDate(date)}>&#62;&#62;</button>
<!--    disabled={ await checkMaxDate(date)}-->

</div>

<style>
    button {
        background-color: transparent;
        border: none;
    }
    input {
        padding: 0.4em;
    }
</style>