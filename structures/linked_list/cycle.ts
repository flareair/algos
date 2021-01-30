import { LinkedList, ListNode } from './linked_list'

export function getLoopNode(head: ListNode = null): ListNode | false {
    let slow = head?.next
    let fast = head?.next?.next

    while (slow && fast) {
        if (slow === fast) {
            return slow
        }

        slow = slow?.next
        fast = fast?.next?.next
    }

    return null
}

function hasLoop(head: ListNode = null): boolean {
    return Boolean(getLoopNode(head))
}

function getLoopLength(loopNode: ListNode) {
    let counter = 1
    let current = loopNode

    while (current.next !== loopNode) {
        current = current.next
        counter++
    }

    return counter
}

export function detectCycle(head: ListNode = null): ListNode | null {
    const nodeInLoop = getLoopNode(head)

    if (!nodeInLoop) {
        return null
    }


    const loopLength = getLoopLength(nodeInLoop)

    let pointer1 = head
    let pointer2 = getByIndex(head, loopLength)

    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }

    return pointer1
}

function getByIndex(head: ListNode, index: number) : ListNode | null {
    let counter = 0
    let node = head

    while (counter < index) {
        if (!node?.next) {
            return null   
        }
        
        node = node.next
        counter++
    }
    
    return node
}
