import { getYears } from '../utils/helper'

export const PropsEntries = <T extends Record<string, unknown>>(props: T) =>
  Object.entries(props) as [keyof T, T[keyof T]][]

export const MovieTypes = {
  movie: 'Movie',
  series: 'Series',
  episode: 'Episode'
}
export type MovieTypeKeys = keyof typeof MovieTypes
export const MovieTypeOptions = PropsEntries(MovieTypes).map(([value, label]) => {
  return { value, label }
})

export const PlotTypes = {
  short: 'Short',
  full: 'Full'
}
export type PlotTypeKeys = keyof typeof PlotTypes
export const PlotTypeOptions = PropsEntries(PlotTypes).map(([value, label]) => {
  return { value, label }
})

const ListYears = getYears().map((value: string) => ({
  value,
  label: value
}))
export const YearOptions = [{ value: 'all', label: 'All Year' }].concat(ListYears)
