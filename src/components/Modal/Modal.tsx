import type { ReactNode } from 'react'        
import styles from './Modal.module.scss'     
interface Props {
  children: ReactNode
  onClose: () => void
}

export default function Modal({ children, onClose }: Props) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        {children}
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  )
}
