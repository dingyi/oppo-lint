import {
  Text,
  VerticalSpace,
} from '@create-figma-plugin/ui'
import {
  Effect,
  Layers,
  Radius,
  Space,
  Spelling,
  Type,
  Vocabulary,
} from '../../icons'
//import { emit, on } from '@create-figma-plugin/utilities'
import { h, JSX } from 'preact'
import styles from './dashboard.css'

export function Dashboard(props: { [key: string]: any }): JSX.Element {

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Space />
        <Text>中英文空格</Text>
      </div>
      <div className={styles.items}>
        <Radius />
        <Text>圆角规则</Text>
      </div>
      <div className={styles.items}>
        <Effect />
        <Text>效果样式</Text>
      </div>
      <div className={styles.items}>
        <Type />
        <Text>字体排版</Text>
      </div>
      <div className={styles.items}>
        <Layers />
        <Text>图层命名</Text>
      </div>
      <div className={styles.items}>
        <Vocabulary />
        <Text>专用词汇</Text>
      </div>
      <div className={styles.items}>
        <Spelling />
        <Text>语法拼写</Text>
      </div>
      <div className={styles.items}>
        <Text>更多...</Text>
      </div>
      <VerticalSpace space="small" />
    </div>
  )
}