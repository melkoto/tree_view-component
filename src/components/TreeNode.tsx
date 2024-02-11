import React from 'react'
import { Node } from './types.ts'

interface TreeNodeProps {
  node: Node
}

const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      {node.name} ({node.price})
      {node.children?.map((childNode) => <TreeNode key={childNode.id} node={childNode} />)}
    </div>
  )
}

export const TreeNode = React.memo(TreeNodeComponent)
