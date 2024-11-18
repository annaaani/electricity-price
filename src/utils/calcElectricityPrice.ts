export function calcElectricityPrice(duration: number, watts: number, startTime: number, hourlyPrices: any) {
    let total = 0;
    for (let i = startTime; i <= startTime+duration; i++) {
        total += ((watts / 1000) * hourlyPrices[i])/1000
    }
    return total.toFixed(3);
}