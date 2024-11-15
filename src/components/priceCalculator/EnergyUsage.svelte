<script lang="ts">
    interface Device {
        watts: number
        hours: number
    }

    import TimeField from './TimeField.svelte'
    import DeviceSwitcher from './DeviceSwitcher.svelte'
    import DisplayPrice from './DisplayPrice.svelte'
    import CalcStartOption from "./CalcStartOption.svelte";
    import devicesData from '../../assets/devices.json'
    import PowerField from "./PowerField.svelte";

    let timeDevice: string | undefined = $state();

    let d: Device | undefined;
    let duration = $state()
    let watts = $state()

    $effect(() => {
        d = (Object(devicesData)[timeDevice!]) as Device;
        if (d) {
            duration = d.hours;
            watts = d.watts
        }
    })
</script>

<div class="space"></div>
<DeviceSwitcher bind:timeDevice/>
<TimeField bind:duration/>
<PowerField bind:watts />
<CalcStartOption/>
<DisplayPrice/>


<style>
    .space {
        padding: 2em 0;
    }
</style>