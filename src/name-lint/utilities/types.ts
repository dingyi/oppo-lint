import { EventHandler } from '@create-figma-plugin/utilities'

export type ComponentNodePlainObject = {
  id: string
  name: string
  pageName: string
}
export type NodePlainObject = {
  id: string
  name: string
}

export type Settings = {
  SelectAll: boolean
}
export type NameLintProps = Settings & {
  componentNodePlainObjects: Array<ComponentNodePlainObject>
  selectedNodePlainObjects: Array<NodePlainObject>
}
export type FormState = NameLintProps & {
  nodeId: null | string
  searchTerm: string
}

export interface CloseUIHandler extends EventHandler {
  name: 'CLOSE_UI'
  handler: () => void
}
export interface SubmitHandler extends EventHandler {
  name: 'SUBMIT'
  handler: (options: {
    nodeId: string
    SelectAll: boolean
  }) => void
}
export interface SelectionChangedHandler extends EventHandler {
  name: 'SELECTION_CHANGED'
  handler: (options: {
    componentNodePlainObjects: Array<ComponentNodePlainObject>
    selectedNodePlainObjects: Array<NodePlainObject>
  }) => void
}