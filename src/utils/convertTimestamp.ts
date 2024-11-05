 export function convertTimestamp(timestamp:Number): string {

     const date = new Date(timestamp * 1000);

     const hours = date.getHours();

     return `${hours < 10 ? '0' + hours : hours}`;
 }

