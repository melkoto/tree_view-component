export interface Node {
  id: number
  name: string
  price: number
  children?: Node[]
}

export interface ServiceNode {
  id: number
  head: number | null
  name: string
  price: number
  sorthead: number
  children?: ServiceNode[]
}
