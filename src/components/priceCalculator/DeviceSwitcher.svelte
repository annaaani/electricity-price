<script lang="ts">
    import {t} from '../../i18n'
    let {deviceId = $bindable()}: { deviceId: string | undefined } = $props()

</script>
<div>
    <p>{t.device}</p>
    <select bind:value={deviceId}>
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