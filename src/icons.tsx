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
  Frame
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
  | 'COMPONENT'
  | 'FRAME'
  | 'GROUP'
  | 'STAR'
  | 'LINE'
  | 'ELLIPSE'
  | 'POLYGON'
  | 'RECTANGLE'
  | 'TEXT'
  | 'VECTOR';
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
  return (
    <Effect />
  )
}

export default Icon