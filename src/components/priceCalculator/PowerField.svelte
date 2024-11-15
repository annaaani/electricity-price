<script lang="ts">
    let {watts = $bindable()} = $props()
</script>

<label>
    <input type="number" bind:value={watts} min="0"/>
</label>