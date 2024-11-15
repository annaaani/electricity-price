<script lang="ts">
    interface Device {
        watts: number
        hours: number
    }

    import Time from './TimeField.svelte'
    import DeviceSwitcher from './DeviceSwitcher.svelte'
    import DisplayPrice from './DisplayPrice.svelte'
    import CalcStartOption from "./CalcStartOption.svelte";
    import devicesData from '../../assets/devices.json'

    let timeDevice: string | undefined = $state();

    let d: Device | undefined;
    let duration = $state()

    $effect(() => {
        d = (Object(devicesData)[timeDevice!]) as Device;
        if (d) {
            duration = d.hours;
        }
    })
</script>

<div class="space"></div>
<DeviceSwitcher bind:timeDevice/>
<Time bind:duration/>
<CalcStartOption/>
<DisplayPrice/>


<style>
    .space {
        padding: 2em 0;
    }
</style>