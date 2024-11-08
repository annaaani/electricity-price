<script lang="ts">
    // TODO: rename component
    import {prevDate, nextDate, maxDate, today, type ISODate} from "../utils/dates";
    let {date = $bindable(today)}: {date:ISODate} = $props()

    export {date as boundDate}
</script>

<button onclick={async () => date = await prevDate(date)}>Previous Day</button>
<input type="date" bind:value={date} max = {maxDate}>
<button onclick={async () => date = await nextDate(date)} >Next Day</button>
<!--disabled={ await checkMaxDate(date)}-->
