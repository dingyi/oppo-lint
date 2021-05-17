import { pluralize } from '@create-figma-plugin/utilities'

import { mainFactory } from '../utilities/main-factory'
import { makeNameLint } from '../utilities/name-lint'

export default mainFactory({
  createFailureMessage: function (scope: string) {
    return `Can't check layers ${scope}`
  },
  createLoadingMessage: function (scope: string) {
    return `Cheking layers ${scope} naming…`
  },
  createSuccessMessage: function (scope: string, count: number) {
    return `Checked ${count} ${pluralize(count, 'layer')} ${scope} naming`
  },
  processNode: function (node: SceneNode) {
    return makeNameLint(node)
  },
  stopTraversal: function (node: SceneNode) {
    return node.type === 'INSTANCE' || node.type === 'BOOLEAN_OPERATION'
  }
})
