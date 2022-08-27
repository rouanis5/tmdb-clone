import { PopularDispatcherType } from './dispatcher.type'
export type NavDataType = {
  id: number
  name: string
  dispatcher: PopularDispatcherType
  current?: boolean
}
