<script lang="ts">
    import UserInput from "./UserInput.svelte";
    import DeviceSwitcher from './DeviceSwitcher.svelte'
    import devicesData from '../../assets/devices.json'
    import {t} from "../../i18n"
    import {calcElectricityPrice} from "../../utils/calcElectricityPrice";

    interface Device {
        watts: number
        hours: number
    }

    let deviceId: keyof typeof devicesData | undefined = $state();
    let {hourlyPrices} = $props()

    let devices: Device | undefined;
    let duration: number = $state(0)
    let watts = $state(0)
    let startTime = $state(new Date().getHours() + 1)

    $effect(() => {
        devices = devicesData[deviceId!]
        if (devices) {
            duration = devices.hours;
            watts = devices.watts
        }
    })

    let elPrice = $derived(calcElectricityPrice(duration, watts, startTime, hourlyPrices))

</script>

<div class="space">
    <DeviceSwitcher bind:deviceId/>
    <UserInput bind:value={duration} label={t.duration} unit={t.hour} minValue={0}
               maxValue={23 - new Date().getHours()}/>
    <UserInput bind:value={watts} label={t.power} unit={t.watt} minValue={0} maxValue={100000}/>
    <UserInput bind:value={startTime} label={t.start} unit={t.hour} minValue={startTime} maxValue={23}/>
</div>
<p class="price-tag">{t.cost}: {elPrice} {t.units.euro}</p>


<style>
    .space {
        display: flex;
        flex-direction: row;
        margin-top: 1em;
        width: 100%;
        text-align: center;
        justify-content: center;
    }

    .price-tag {
        text-align: center;
    }

</style>