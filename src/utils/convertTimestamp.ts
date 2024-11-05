 export function convertTimestamp(timestamp:Number): String {

     const date = new Date(timestamp * 1000);

     const hours = date.getHours();

     return `${hours < 10 ? '0' + hours : hours}`;
 }

