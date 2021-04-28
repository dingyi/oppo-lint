/** @jsx h */
import styles from './styles.css'

import { h } from 'preact'

const withIcon = (icon: string) => {
  const Icon = ({ size = 32, color = 'currentColor' }) => {
    return (
      <svg
        viewBox="0 0 32 32"
        className={styles.icons}
        width={size}
        height={size}
        fill={color}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    )
  }

  return Icon
}

export default withIcon