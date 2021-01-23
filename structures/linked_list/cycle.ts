import { MyLinkedList, MyListNode } from './linked_list'

function hasLoop(head: MyListNode = null): boolean {
    let slow = head?.next
    let fast = head?.next?.next

    while (slow && fast) {
        if (slow === fast) {
            return true
        }

        slow = slow?.next
        fast = fast?.next?.next
    }

    return false
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

console.log(hasLoop(list.head))

// loop list
list.getTail().next = list.findByIndex(4)

console.log(hasLoop(list.head))
