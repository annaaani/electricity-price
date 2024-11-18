<script lang="ts">
    import {type ISODate, today} from "../../utils/dates";
    import {roundUpToNearest5} from "../../utils/roundUpToNearest5";
    import {t} from "../../i18n";

    let {time, price, dailyMax, date}: { time: number, price: number, dailyMax: number, date: ISODate } = $props()
    const currentHour = new Date().getHours();
    const isCurrentHour = $derived(time === currentHour && date === today);
</script>

<div class="bar">
    <div class="bg"
         class:negative={price < 0}
         class:current-hour={isCurrentHour}
         style="height: {Math.abs(price / roundUpToNearest5(dailyMax) * 100)}%"></div>
    <p class="hour">{time}</p>
    <p class="price">{price} {t.units.cent}/{t.units.kiloWattHour}</p>
</div>


<style>
    .bar {
        height: 100%;
        width: 2.5%;
        position: relative;
    }

    .bg {
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: #ddd;
        border-radius: 0.5em 0.5em 0 0;
        transition: height 1s ease-in-out, background-color 0.3s ease;
    }

    .hour {
        position: absolute;
        bottom: -3em;
        width: 100%;
        text-align: center;
    }

    .bar:hover .bg {
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
        transform-origin: bottom;
        transform: scaleY(-1);
    }
</style>
