import {
  Container,
  Text,
  useForm,
  VerticalSpace,
} from '@create-figma-plugin/ui'
import Icon from '../../icons'
//import { emit, on } from '@create-figma-plugin/utilities'
import { h, JSX } from 'preact'
import { useEffect, useState } from 'preact/hooks'

function sendToCode<T>(type: string, data?: T) {
  parent.postMessage({ pluginMessage: { type, data } }, '*')
}

export function NameLint(props: NameLintProps): JSX.Element {
  const [nodes, setNodes] = useState<SceneNode[]>([])
  const [selectedNodeId, setSelectedNodeId] = useState(false)

  const handleSelect = (nodeId: string) => {
    setSelectedNodeId(nodeId)
  }

  useEffect(() => {
    sendToCode('find-all-nodes')

    window.addEventListener('message', e => {
      const { type, data } = e.data.pluginMessage
      if (type === 'found-nodes') {
        setNodes(data.nodes);
      } else if (type === 'node-renamed') {
        setNodes(nodes => nodes.filter(node => node.id !== data.nodeId))
      }
    })
  }, [])

  return (
    <Container space="medium">
      <VerticalSpace space="large" />
      <Text muted>Choose a layer and double click to rename it.</Text>
      <VerticalSpace space="large" />
      {nodes.map(node => (
        <Node
          key={node.id}
          node={node}
          selected={node.id === selectedNodeId}
          onSelect={() => handleSelect(node.id)}
        />
      ))}
    </Container>
  )
}

type FormValues = {
  name: string
}

type NodeProps = {
  node: SceneNode
  selected: boolean
  onSelect: () => void
}

const Node = ({ node, selected, onSelect }: NodeProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { name: node.name },
  })

  const handleFocus = () => {
    setTimeout(
      // @ts-ignore
      () => document.getElementsByName('name')[0].select(),
      5
    )
  }

  const onSubmit = (v: FormValues) => {
    const newName = v.name !== '' || v.name !== node.name ? v.name : node.name
    sendToCode('rename-node', { nodeId: node.id, newName })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    reset()
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') handleCancel()
  }

  useEffect(() => {
    if (selected) sendToCode('zoom-into-node', { nodeId: node.id })
  }, [selected])

  return (
    <div
      onClick={onSelect}
      onDoubleClick={() => setIsEditing(true)}
      className={`Node ${selected ? 'selected' : ''}`}
    >
      <Icon type={node.type} className="Icon" />
      {!isEditing ? (
        <span className="nameText">{node.name}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            className="nameInput"
            type="text"
            placeholder="Rename it!"
            autoFocus
            ref={register}
            onFocus={handleFocus}
            onBlur={handleCancel}
            onKeyDown={handleKeyDown}
          />
        </form>
      )}
    </div>
  )
}
