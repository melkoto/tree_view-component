import { FC, memo } from 'react'
import { Node } from './types.ts'

interface TreeNodeProps {
  node: Node
}

const TreeNodeComponent: FC<TreeNodeProps> = ({ node }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      {node.name} ({node.price})
      {node.children?.map((childNode) => <TreeNode key={childNode.id} node={childNode} />)}
    </div>
  )
}

export const TreeNode = memo(TreeNodeComponent)
