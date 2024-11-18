export function calcElectricityPrice(duration: number, watts: number, startTime: number, hourlyPrices: any) {
    let total = 0;
    if (!hourlyPrices || hourlyPrices.length <= 1) {
        return 0;
    }

    for (let i = startTime; i < startTime+duration; i++) {
        total += ((watts / 1000) * hourlyPrices[i])/100
    }
    return total.toFixed(3);
}