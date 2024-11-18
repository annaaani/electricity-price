<script lang="ts">
    interface Device {
        watts: number
        hours: number
    }

    import TimeField from './TimeField.svelte'
    import DeviceSwitcher from './DeviceSwitcher.svelte'
    import StartTimeField from "./StartTimeField.svelte";
    import devicesData from '../../assets/devices.json'
    import PowerField from "./PowerField.svelte";
    import {t} from "../../i18n"
    import {calcElectricityPrice} from "../../utils/calcElectricityPrice";

    let timeDevice: keyof typeof devicesData | undefined = $state();
    let {hourlyPrices} = $props()
    //TODO: input field incorrect (min) values overwrite with default

    let d: Device | undefined;
    let duration : number = $state(0)
    let watts = $state(0)
    let startTime = $state(new Date().getHours() + 1)

    $effect(() => {
        d = devicesData[timeDevice!]
        if (d) {
            duration = d.hours;
            watts = d.watts
        }
    })

    let elPrice = $derived(calcElectricityPrice(duration, watts, startTime, hourlyPrices))

</script>

<div class="space"></div>
<DeviceSwitcher bind:timeDevice/>
<TimeField bind:duration/>
<PowerField bind:watts/>
<StartTimeField bind:startTime/>
<p>{elPrice} {t.units.euro}</p>

<style>
    .space {
        padding: 2em 0;
    }
</style>