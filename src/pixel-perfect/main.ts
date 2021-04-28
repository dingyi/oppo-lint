import { pluralize } from '@create-figma-plugin/utilities'

import { mainFactory } from '../utilities/main-factory'
import { makePixelPerfect } from '../utilities/make-pixel-perfect'

export default mainFactory({
  createFailureMessage: function (scope: string) {
    return `No change to layers ${scope}`
  },
  createLoadingMessage: function (scope: string) {
    return `Making layers ${scope} pixel-perfect…`
  },
  createSuccessMessage: function (scope: string, count: number) {
    return `Made ${count} ${pluralize(count, 'layer')} ${scope} pixel-perfect`
  },
  processNode: makePixelPerfect,
  stopTraversal: function (node: SceneNode) {
    return node.type === 'INSTANCE' || node.type === 'BOOLEAN_OPERATION'
  }
})
