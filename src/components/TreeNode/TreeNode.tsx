import { FC, memo, useState } from 'react'

import { Node } from '../../types.ts'

import styles from './TreeNode.module.css'

interface TreeNodeProps {
  node: Node
}

const TreeNodeComponent: FC<TreeNodeProps> = ({ node }) => {
  const [isCollapsed, setIsCollapsed] = useState(node.isCollapsed)

  const toggleCollapse = () => {
    if (node.children?.length) {
      setIsCollapsed(!isCollapsed)
    }
  }

  const hasChildren = !!node.children?.length
  const priceDisplay = Number(node.price) > 0 ? `(${node.price} руб.)` : ''
  const nodeStyle = hasChildren ? styles.nodeWithChildren : styles.leafNode

  return (
    <div className={styles.treeNode}>
      <div className={nodeStyle} onClick={toggleCollapse}>
        {hasChildren && (isCollapsed ? '►' : '▼')} {node.name} {priceDisplay}
      </div>
      {!isCollapsed && (
        <div className={styles.children}>
          {node.children?.map((childNode) => (
            <TreeNodeComponent key={childNode.id} node={childNode} />
          ))}
        </div>
      )}
    </div>
  )
}

export const TreeNode = memo(TreeNodeComponent)
