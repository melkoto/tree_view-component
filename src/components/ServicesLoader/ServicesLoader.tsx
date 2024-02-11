// ServicesLoader.tsx
import React, { useEffect, useState } from 'react'
import { ServiceNode } from '../../types.ts'
import { ErrorMessage } from '../Error'
import { TreeView } from '../TreeView'

export const ServicesLoader: React.FC = () => {
  const [data, setData] = useState<ServiceNode[]>([])
  const [error, setError] = useState<string | null>(null)

  const getServices = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/services`)

      if (!response.ok) {
        throw new Error('Ошибка запроса')
      }

      const data: ServiceNode[] = await response.json()
      setData(data)
      setError(null)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Произошла ошибка при загрузке данных')
    }
  }

  useEffect(() => {
    getServices()
  }, [])

  const onRetry = () => {
    getServices()
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={onRetry} />
  }

  return <TreeView data={data} />
}
