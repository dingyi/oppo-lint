/** @jsx h */
import { emit } from '@create-figma-plugin/utilities'
import {
  Container,
  Text,
  Columns,
  VerticalSpace,
  useForm,
  Button
} from '@create-figma-plugin/ui'
import { h } from 'preact'
import styles from './dashboard.css'

export function Dashboard(props: { [key: string]: any }): h.JSX.Element {
  const { } = useForm(props, {
    onClose: function () {
      emit('CLOSE_UI')
    }
  })
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Text>foo</Text>
      </div>
      <div className={styles.items}>
        <Text>bar</Text>
      </div>
      <div className={styles.items}>
        <Text>baz</Text>
      </div>
      <div className={styles.items}>
        <Text>foo</Text>
      </div>
      <div className={styles.items}>
        <Text>bar</Text>
      </div>
      <div className={styles.items}>
        <Text>baz</Text>
      </div>
      <VerticalSpace space="small" />
    </div>
  )
}