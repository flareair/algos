import { ListNode } from './linked_list'
import { createFromArray, printToConsole } from './common'
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head === null) {
        return null
    }

    let toReturn = null
    let current = head
    while (!toReturn && current) {
        if (current.val !== val) {
            toReturn = current
        }

        current = current.next
    }

    if (!toReturn) {
        return toReturn
    }

    current = toReturn.next
    let prev = toReturn

    while (current) {
        if (current.val === val) {
            prev.next = current.next
            current = prev.next
        } else {
            prev = current
            current = current.next
        }
    }

    return toReturn

}

// const list = createFromArray([1, 2, 2, 3, 10, 2])

// printToConsole(list)
// printToConsole(removeElements(list, 2))
// printToConsole(removeElements(createFromArray([1, 2, 2, 3]), 2))
// printToConsole(removeElements(createFromArray([2, 2, 2, 2]), 2))