export interface Node {
  id: number
  name: string
  price: number
  children?: Node[]
  isCollapsed?: boolean
}

export interface ServiceNode {
  id: number
  head: number | null
  name: string
  price: number
  sorthead: number
  children?: ServiceNode[]
}
