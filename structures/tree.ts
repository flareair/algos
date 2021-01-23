import { asTree } from 'treeify'

type TreeNode = {
    left: TreeNode | null
    right: TreeNode | null
    data: number
}

// data = [1, 2, 3, 4, 5, 7]
export const create = (dataList: any[]) => {
    let leafs = dataList.map(data => createNode(data))
    leafs.sort((a, b) => a.data - b.data)

    while (leafs.length > 1) {
        const [ first, second ] = leafs
        const newNode = createNode(first.data + second.data, first, second)
        leafs = leafs.slice(2)
        leafs.push(newNode)
        leafs.sort((a, b) => a.data - b.data)
    }

    return leafs[0]
}

const createNode = (data: number, left?: TreeNode, right?: TreeNode): TreeNode => ({
    data: data,
    left: left || null,
    right: right || null
})

const createNodeNullable = (data: number, left?: TreeNode, right?: TreeNode): TreeNode | null => {
    if (data === null || data === undefined) {
        return null
    }

    return createNode(data, left, right)
}

export const print = (tree: TreeNode) => asTree(tree as unknown, true, true)

export const toArray = (tree: TreeNode): TreeNode[] => {
    const result: TreeNode[] = []
    fillArray(tree, result)

    return result
}

const fillArray = (tree: TreeNode | null, acc: TreeNode[]) => {
    if (!tree) {
        return
    }

    acc.push(tree)

    fillArray(tree.left, acc)
    fillArray(tree.right, acc)
}

export const getTotal = (tree: TreeNode) => toArray(tree).reduce((acc, { data }) => acc += data, 0)

export const getLeafs = (tree: TreeNode | null): TreeNode[] => {
    const result: TreeNode[] = []

    if (!tree) {
        return result
    }

    if (isLeaf(tree)) {
        result.push(tree)
    }

    return result.concat(getLeafs(tree.left), getLeafs(tree.right))
}

const isLeaf = (node: TreeNode): boolean => !!node.data && !node.left && !node.right

const tree = create([6, 8, 1, 3])

console.log(print(tree))
console.log(toArray(tree))
console.log('Total: ', getTotal(tree))
console.log('Leafs: ', getLeafs(tree))
