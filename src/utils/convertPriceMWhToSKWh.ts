export function convertPriceMWhToSKWh(priceMWh:Number): number {
    const priceSKWh = priceMWh * 0.1;
    return parseFloat(priceSKWh.toFixed(2));
}