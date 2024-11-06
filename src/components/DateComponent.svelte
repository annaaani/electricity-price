<script lang="ts">
    const today = new Date().toISOString().split("T")[0]
    let {date = $bindable(today)} = $props()
</script>

<input type="date" bind:value={date} max={today} data-testid="dateInput">
