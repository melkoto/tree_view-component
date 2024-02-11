import { FC, memo } from 'react'
import { Node } from '../../types.ts'
import styles from './TreeNode.module.css'

interface TreeNodeProps {
  node: Node
}

const TreeNodeComponent: FC<TreeNodeProps> = ({ node }) => {
  return (
    <div className={styles.treeNode}>
      {node.name} ({node.price})
      {node.children?.map((childNode) => <TreeNode key={childNode.id} node={childNode} />)}
    </div>
  )
}

export const TreeNode = memo(TreeNodeComponent)
