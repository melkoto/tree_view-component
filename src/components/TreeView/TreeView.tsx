import { FC, useMemo } from 'react'
import { Node, ServiceNode } from '../../types.ts'
import { buildTree } from '../../utils/build-tree.ts'
import { TreeNode } from '../TreeNode'

import styles from './TreeView.module.css'

interface TreeViewProps {
  data: Node[]
}

export const TreeView: FC<TreeViewProps> = ({ data }) => {
  const tree = useMemo(() => buildTree(data as ServiceNode[]), [data])

  return (
    <div className={styles.treeView}>
      {tree.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  )
}
