import { ListNode, LinkedList } from './linked_list'
import { detectCycle } from './cycle'

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) {
        return null
    }

    const tailA = getTail(headA)

    tailA.next = headB

    const intersection = detectCycle(headA)

    tailA.next = null

    return intersection
}

function getTail(head: ListNode): ListNode {
    let tail = head

    while (tail.next) {
        tail = tail.next
    }

    return tail
}



const mutualPart: ListNode = {
    val: 3,
    next: {
        val: 2,
        next: {
            val: 1,
            next: {
                val: 0,
                next: null
            }
        }
    }
}

const list1: ListNode = {
    val: 10,
    next: {
        val: 9,
        next: {
            val: 8,
            next: mutualPart
        }
    }
}

const list2: ListNode = {
    val: 100,
    next: {
        val: 99,
        next: mutualPart
    }
}

console.log(getIntersectionNode(list1, list2))
console.log(getIntersectionNode({
    val: 1,
    next: null
}, {
    val: 2,
    next: null
}))