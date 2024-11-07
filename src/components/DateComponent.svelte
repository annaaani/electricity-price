<script lang="ts">
    import {today} from "../utils/todayDate";
    let {date = $bindable(today)} = $props()

    // TODO: breaks tests (app -> dateComponent)
    // export {date}
</script>

<input type="date" bind:value={date} max={today}>
