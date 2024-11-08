export type ISODate = `${number}-${number}-${number}`

export const today : ISODate = toISODate(new Date())
// @ts-ignore
export const maxDate: ISODate = nextDate(today)

export function toISODate(date: Date) {
    return date.toISOString().split("T")[0] as ISODate
}

export async function prevDate(date: ISODate) {
    let d = new Date(date);
    d.setDate(d.getDate() - 1);
    return toISODate(d)
}
export async function nextDate(date: ISODate) {

    let d = new Date(date);
    d.setDate(d.getDate() + 1);
    return toISODate(d)
}

export async function checkMaxDate (date: ISODate){
    console.log(maxDate)
    return date > maxDate
}