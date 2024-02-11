import React from 'react'
import './ErrorMessage.css'

interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="error-message">
      <h2>Упс! Что-то пошло не так...</h2>
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="retry-button">
          Попробовать снова
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
