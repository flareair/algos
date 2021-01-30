import { ListNode, LinkedList } from './linked_list'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let pointA = head
    let pointB = getByIndex(head, n)

    if (!head.next && n === 1) {
        return null
    }

    if (pointB === null) {
        return head.next
    }

    if (pointB === undefined) {
        return head
    }

    // while PointB reaches end of the loop
    while (pointB.next) {
        pointA = pointA?.next
        pointB = pointB?.next
    }

    pointA.next = pointA?.next?.next || null

    return head
}

function getByIndex(head: ListNode, index: number): ListNode | null | undefined {
    let count = 0
    let result: ListNode = head

    while (count < index && result !== undefined) {
        result = result?.next
        count += 1
    }

    return result
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

const short: ListNode = {val: 1, next: {val: 2, next: null}}

// console.log(removeNthFromEnd(short, 1))
// console.log(removeNthFromEnd({val: 1, next: null}, 1))
// console.log(removeNthFromEnd({val: 1, next: null}, 2))
// console.log(removeNthFromEnd(short, 5))
// rebular cases

console.log(getByIndex(short, 1))
console.log(getByIndex(short, 2))
console.log(getByIndex(short, 3))
// console.log(removeNthFromEnd(short, 1))