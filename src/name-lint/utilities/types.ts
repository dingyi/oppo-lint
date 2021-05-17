import { EventHandler } from '@create-figma-plugin/utilities'

import { Settings } from '../../utilities/types'

export type NameLintProps = Pick<
  Settings,
  'smartRenameLayersWhitelist'
> & {
  hasSelection: boolean
}

export type FormState = NameLintProps & {
  loading: boolean
}

export interface CloseUIHandler extends EventHandler {
  name: 'CLOSE_UI'
  handler: () => void
}

export interface SelectionChangedHandler extends EventHandler {
  name: 'SELECTION_CHANGED'
  handler: (hasSelection: boolean) => void
}