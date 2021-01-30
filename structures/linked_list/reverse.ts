import { ListNode } from './linked_list'

const short: ListNode = {val: 1, next: {val: 2, next: {val: 3, next: null}}}

function reverseList(head: ListNode | null): ListNode | null {
    let newHead = head

    while (head.next) {
        let temp = newHead
        newHead = head.next
        head.next = head.next?.next || null
        newHead.next = temp
    }

    return newHead
}

console.log(reverseList(short))