export const today: string = new Date().toISOString().split("T")[0]

export type Date = typeof today

