import React from 'react'
import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className={styles['error-message']}>
      <h2>Упс! Что-то пошло не так...</h2>
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className={styles['retry-button']}>
          Попробовать снова
        </button>
      )}
    </div>
  )
}
