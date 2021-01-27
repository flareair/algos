import { MyLinkedList, ListNode } from './linked_list'

function getLoopNode(head: ListNode = null): ListNode | false {
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

function detectCycle(head: ListNode = null): ListNode | null {
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

const list = new MyLinkedList()

list.addAtTail(0)
list.addAtTail(1)
list.addAtTail(2)
list.addAtTail(3)
list.addAtTail(4)
list.addAtTail(5)
list.addAtTail(6)
list.addAtTail(7)
list.addAtTail(8)
list.addAtTail(9)

// console.log(hasLoop(list.head))

// // loop list
list.getTail().next = list.findByIndex(4)

console.log(hasLoop(list.head))

console.log(detectCycle(list.head))
