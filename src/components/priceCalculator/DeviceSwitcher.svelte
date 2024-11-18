<script lang="ts">
    import {t} from '../../i18n'
    let {timeDevice = $bindable()}: { timeDevice: string | undefined } = $props()

</script>
<div>
    <p>{t.device}</p>
    <select bind:value={timeDevice}>
        {#each Object.entries(t.devices) as [code, name]}
            <option value={code}>{name}</option>
        {/each}
    </select>
</div>

<style>

    select {
        padding: 0.5em;
    }
</style>