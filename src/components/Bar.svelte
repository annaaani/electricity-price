<script lang="ts">
    export let time: string;
    export let price: number;
</script>

<div class="bar-container">
    <p>{time}</p>
    <div class="box" style="height: {price * 1.1}em;"></div>
</div>

<style>

    .bar-container {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-end;
        width: 1em;
    }

    .box {
        width: 100%;
        background-color: #ddd;
        border-radius: 0.5em;
    }

    p {
        font-size: 0.8em;
        margin-top: 0.5em;
    }
</style>
