export function fetchUrl(date: string) {
    const start = new Date(date + 'T00:00')
    const end = new Date(date + 'T23:59')
    return `https://dashboard.elering.ee/api/nps/price?start=${start.toISOString()}&end=${end.toISOString()}`
}

export async function fetchData(date: string) {
    let url = fetchUrl(date)
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    const jsonData = await response.json()
    return jsonData.data
}
