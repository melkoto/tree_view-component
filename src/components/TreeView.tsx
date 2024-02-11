import { FC, useMemo } from 'react'
import { TreeNode } from './TreeNode.tsx'
import { Node, ServiceNode } from './types.ts'
import { buildTree } from '../utils/build-tree.ts'

interface TreeViewProps {
  data: Node[]
}

export const TreeView: FC<TreeViewProps> = ({ data }) => {
  const tree = useMemo(() => buildTree(data as ServiceNode[]), [data])

  return (
    <div>
      {tree.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  )
}
