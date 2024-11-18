<script lang="ts">
    interface Device {
        watts: number
        hours: number
    }

    import TimeField from './TimeField.svelte'
    import DeviceSwitcher from './DeviceSwitcher.svelte'
    import CalcStartOption from "./CalcStartOption.svelte";
    import devicesData from '../../assets/devices.json'
    import PowerField from "./PowerField.svelte";

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
    function calcElectricityPrice(duration: number, watts: number, startTime: number, hourlyPrices: any) {
        let total = 0;
        if(duration == undefined){
            duration = 1
        }
        for (let i = startTime; i <= startTime+duration; i++) {
            total +=   (watts / 1000) * hourlyPrices[i]
        }
        return total.toFixed(2);
    }
    let elPrice = $derived(calcElectricityPrice(duration, watts, startTime, hourlyPrices))

</script>

<div class="space"></div>
<DeviceSwitcher bind:timeDevice/>
<!--TODO: make a new global css file -->
<TimeField bind:duration/>
<PowerField bind:watts/>
<CalcStartOption bind:startTime/>
<p>{elPrice}</p>

<style>
    .space {
        padding: 2em 0;
    }
</style>