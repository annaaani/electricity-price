export function convertPriceMWhToSKWh(priceMWh:Number): Number {
    const priceSKWh = priceMWh * 0.1;
    return parseFloat(priceSKWh.toFixed(2));
}