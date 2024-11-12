<script lang="ts">
    import {type ISODate, today} from "../utils/dates";

    let {time, price, dailyMax, date}: { time: number, price: number, dailyMax: number, date: ISODate } = $props()
    // TODO: negative price
    const currentHour = new Date().getHours();
    const isCurrentHour = $derived(time === currentHour);
    const isToday = $derived(date === today);
</script>

{#if price > 0}
    <div class="bar {isCurrentHour && isToday ? 'current-hour' : ''}" style="height: {price / dailyMax * 100}%">
        <p class="hour">{time}</p>
        <p class="price">{price} c/kWh</p>
    </div>
{:else}
    <div></div>
    <div class="bar negative {isCurrentHour && isToday ? 'current-hour' : ''}"
         style="height: -{price / dailyMax * 100}%">
        <p class="hour">{time}</p>
        <p class="price">{price} c/kWh</p>
    </div>
{/if}


<style>
    .bar {
        width: 2.5%;
        background-color: #ddd;
        border-radius: 0.5em;
        transition: background-color 0.3s ease;
    }

    .hour {
        position: absolute;
        bottom: -3em;
    }

    .bar:hover {
        background-color: #ccc;
    }

    .price {
        font-size: 0.8em;
        opacity: 0;
        transition: opacity 0.3s ease;
        position: absolute;
        z-index: 10;
    }

    .bar:hover .price {
        opacity: 1;
        z-index: 10;
    }

    .current-hour {
        background-color: #bbb;
    }

    .negative {
        background-color: red;
        z-index: 1000;
        overflow: visible;
    }

</style>
