import {
  Text,
  VerticalSpace,
} from '@create-figma-plugin/ui'
import Icon from '../../icons'
//import { emit, on } from '@create-figma-plugin/utilities'
import { h, JSX } from 'preact'
import styles from './dashboard.css'

export function Dashboard(props: { [key: string]: any }): JSX.Element {

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Icon type="Space"/>
        <Text>中英文空格</Text>
      </div>
      <div className={styles.items}>
        <Icon type="Radius" />
        <Text>圆角规则</Text>
      </div>
      <div className={styles.items}>
        <Icon type="Effect" />
        <Text>效果样式</Text>
      </div>
      <div className={styles.items}>
        <Icon type="Type" />
        <Text>字体排版</Text>
      </div>
      <div className={styles.items}>
        <Icon type="Layers" />
        <Text>图层命名</Text>
      </div>
      <div className={styles.items}>
        <Icon type="Vocabulary" />
        <Text>专用词汇</Text>
      </div>
      <div className={styles.items}>
        <Icon type="Spelling" />
        <Text>语法拼写</Text>
      </div>
      <div className={styles.items}>
        <Text>更多...</Text>
      </div>
      <VerticalSpace space="small" />
    </div>
  )
}