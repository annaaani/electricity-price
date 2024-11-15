<script>
    let {duration = $bindable()} = $props()
</script>

<label>
    <input type="number" bind:value={duration} min="0"/>
</label>