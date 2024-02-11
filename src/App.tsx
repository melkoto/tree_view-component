import { useEffect, useState } from 'react'
import { ServiceNode } from './components/types.ts'
import { TreeView } from './components/TreeView.tsx'

function App() {
  const [data, setData] = useState<ServiceNode[]>([])

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/services`)
        if (!response.ok) {
          throw new Error('Ошибка запроса')
        }
        const data: ServiceNode[] = await response.json()
        setData(data)
        console.log({ data })
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    }

    getServices()
  }, [])
  return (
    <>
      <TreeView data={data} />
    </>
  )
}

export default App
