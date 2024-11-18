<script lang="ts">
    import {t} from '../../i18n'
    let {timeDevice = $bindable()}: { timeDevice: string | undefined } = $props()

</script>

<select bind:value={timeDevice}>
    {#each Object.entries(t.devices) as [code, name]}
        <option value={code}>{name}</option>
    {/each}
</select>

<style>

    select {
        padding: 0.5em;
    }
</style>