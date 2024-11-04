<!-- src/components/Histogram.svelte -->
<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { Chart, registerables } from 'chart.js';

    Chart.register(...registerables);

    export let data: number[] = [];
    export let labels: string[] = [];

    let chart: Chart | null = null;
    let canvas: HTMLCanvasElement;

    onMount(() => {
        chart = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Frequency',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Categories'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Frequency'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    });

    // onDestroy(() => {
    //     if (chart) {
    //         chart.destroy(); // Clean up chart instance
    //     }
    // });
</script>

<canvas bind:this={canvas}></canvas>

<style>
    canvas {
        max-width: 600px;
        margin: 20px auto;
    }
</style>
