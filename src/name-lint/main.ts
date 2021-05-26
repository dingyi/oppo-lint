import {
  emit,
  formatErrorMessage,
  formatSuccessMessage,
  isWithinInstanceNode,
  loadSettingsAsync,
  once,
  pluralize,
  saveSettingsAsync,
  showUI
} from '@create-figma-plugin/utilities'

import { defaultSettings, settingsKey } from './utilities/settings'
import {
  CloseUIHandler,
  NameLintProps,
  SelectionChangedHandler,
  SubmitHandler
} from './utilities/types'

export default async function (): Promise<void> {
  if (figma.currentPage.selection.length === 0) {
    figma.closePlugin(formatErrorMessage('Select one or more layers'))
    return
  }
  const settings = await loadSettingsAsync(defaultSettings, settingsKey)
  once<CloseUIHandler>('CLOSE_UI', function () {
    figma.closePlugin()
  })
  once<SubmitHandler>(
    'SUBMIT',
    async function (options: {
      nodeId: string
      SelectAll: boolean
    }) {
      const { nodeId, SelectAll } = options
      await saveSettingsAsync({ SelectAll }, settingsKey)
      const selection = figma.currentPage.selection
      const componentNode = figma.getNodeById(nodeId) as ComponentNode
      const newSelection = []
      let count = 0
      for (const node of selection) {
        if (isWithinInstanceNode(node) === true) {
          continue
        }
        if (node.id === nodeId) {
          newSelection.push(node)
          continue
        }
        count++
        const parentNode = node.parent
        if (parentNode === null) {
          throw new Error('Node has no parent')
        }
        const index = parentNode.children.indexOf(node)
        const instance = componentNode.createInstance()
        parentNode.insertChild(index, instance)
        instance.x = node.x
        instance.y = node.y
        if (SelectAll === true) {
          instance.resize(node.width, node.height)
        }
        node.remove()
        newSelection.push(instance)
      }
      figma.currentPage.selection = newSelection
      if (count === 0) {
        figma.closePlugin()
        return
      }
      figma.closePlugin(
        formatSuccessMessage(
          `Replaced ${pluralize(
            count,
            'layer',
            `${count} layers`
          )} with component`
        )
      )
    }
  )
  figma.on('selectionchange', function () {
    emit<SelectionChangedHandler>('SELECTION_CHANGED', {
      componentNodePlainObjects: getComponentNodePlainObjects(),
      selectedNodePlainObjects: getSelectedNodePlainObjects()
    })
  })
  showUI<NameLintProps>(
    { height: 402, width: 360 },
    {
      ...settings,
      componentNodePlainObjects,
      selectedNodePlainObjects
    }
  )
}