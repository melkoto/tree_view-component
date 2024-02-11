import { FC, memo, useState } from 'react'
import { Node } from '../../types.ts'
import styles from './TreeNode.module.css'

interface TreeNodeProps {
  node: Node
}

const TreeNodeComponent: FC<TreeNodeProps> = ({ node }) => {
  const [isCollapsed, setIsCollapsed] = useState(node.isCollapsed)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={styles.treeNode}>
      <div onClick={toggleCollapse}>
        {node.name} {Number(node.price) > 0 ? `(${node.price} руб.)` : ''}
      </div>
      {!isCollapsed &&
        node.children?.map((childNode) => (
          <TreeNodeComponent key={childNode.id} node={childNode} />
        ))}
    </div>
  )
}

export const TreeNode = memo(TreeNodeComponent)
