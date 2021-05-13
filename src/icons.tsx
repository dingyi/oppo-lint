import { h } from 'preact'
import {
  Effect,
  Layers,
  Radius,
  Space,
  Spelling,
  Type,
  Vocabulary,
  Component,
  Ellipse,
  Frame,
  Group,
  Instance,
  Line,
  Polygon,
  Rectangle,
  Slice,
  Star,
  Union,
  Vector
} from './icons/index'

type Props = {
  type:
  | 'Effect'
  | 'Layers'
  | 'Radius'
  | 'Space'
  | 'Spelling'
  | 'Type'
  | 'Vocabulary'
  //Figma API datas
  | 'COMPONENT'
  | 'ELLIPSE'
  | 'FRAME'
  | 'GROUP'
  | 'INSTANCE'
  | 'LINE'
  | 'POLYGON'
  | 'RECTANGLE'
  | 'SLICE'
  | 'STAR'
  | 'UNION'
  | 'VECTOR'
}

const Icon = ({ type }: Props) => {
  if (type === 'Effect') return <Effect />
  if (type === 'Layers') return <Layers />
  if (type === 'Radius') return <Radius />
  if (type === 'Space') return <Space />
  if (type === 'Spelling') return <Spelling />
  if (type === 'Type') return <Type />
  if (type === 'Vocabulary') return <Vocabulary />
  if (type === 'COMPONENT') return <Component />
  if (type === 'ELLIPSE') return <Ellipse />
  if (type === 'FRAME') return <Frame />
  if (type === 'GROUP') return <Group />
  if (type === 'INSTANCE') return <Instance />
  if (type === 'LINE') return <Line />
  if (type === 'POLYGON') return <Polygon />
  if (type === 'RECTANGLE') return <Rectangle />
  if (type === 'SLICE') return <Slice />
  if (type === 'STAR') return <Star />
  if (type === 'UNION') return <Union />
  if (type === 'VECTOR') return <Vector />
  return (
    null
  )
}

export default Icon