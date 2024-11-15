<script>
    import {t} from '../../i18n'

    let {device = $bindable()} = $props()
</script>

<select bind:value={device}>
    {#each Object.entries(t.devices) as [code, name]}
        <option value={code}>{name}</option>
    {/each}
</select>