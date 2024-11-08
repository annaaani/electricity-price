<script lang="ts">
    import {prevDate, nextDate, maxDate, today, checkMaxDate, type ISODate, toISODate} from "../utils/dates";

    let {date = $bindable(today)}: { date: ISODate } = $props()
    export {date as boundDate}
    console.log("...."+checkMaxDate(date)+" "+ date)
</script>
<div>
    <button onclick={async () => date = await prevDate(date)}>&#60;&#60;</button>
    <input type="date" bind:value={date} max={(new Date(today).setDate(new Date().getDate()+1))}>
    <button disabled = {() => checkMaxDate(date)} onclick={async () => date = await nextDate(date)}>&#62;&#62;</button>


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