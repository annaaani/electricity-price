export function convertTimestamp(timestamp: number): string {

    const date = new Date(timestamp * 1000);
    const hours: number = date.getHours();
    return `${hours < 10 ? '0' + hours : hours}`;
}

