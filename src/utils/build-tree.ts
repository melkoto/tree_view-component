import { ServiceNode } from '../components/types.ts'

/**
 * Строит древовидную структуру из массива объектов ServiceNode.
 *
 * @param {ServiceNode[]} services - Массив объектов ServiceNode для построения древовидной структуры.
 * @return {ServiceNode[]} Древовидная структура, построенная из заданного массива объектов ServiceNode.
 */
export const buildTree = (services: ServiceNode[]): ServiceNode[] => {
  const nodes: Record<number, ServiceNode> = {}
  const tree: ServiceNode[] = []

  services.forEach((service) => {
    nodes[service.id] = { ...service, children: [] }
  })

  services.forEach((service) => {
    if (service.head === null) {
      tree.push(nodes[service.id])
    } else if (nodes[service.head]) {
      nodes[service.head].children!.push(nodes[service.id])
    }
  })

  /**
   * Сортирует узлы дерева на основе свойства 'sorthead'.
   *
   * @param {ServiceNode} node - узел, который нужно отсортировать
   * @return {void}
   */
  const sortTree = (node: ServiceNode): void => {
    if (node.children && node.children.length) {
      node.children.sort((a, b) => a.sorthead - b.sorthead)
      node.children.forEach(sortTree)
    }
  }

  tree.forEach(sortTree)

  return tree
}
