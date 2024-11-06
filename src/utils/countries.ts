export const countries = ['ee', 'lv', 'lt', 'fi'] as const

export type Country = typeof countries[number]
