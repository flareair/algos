import { ListNode, createFromArray, print } from './common'
import assert from 'assert'

function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null
    }

    let isOdd: boolean = false
    let current: ListNode = head.next
    let prev = head
    let oddEndPointer: ListNode = head

    while (current) {
        if (isOdd) {
            let temp = oddEndPointer.next
            oddEndPointer.next = current
            oddEndPointer = current
            prev.next = current.next
            current.next = temp
            current = prev.next
        } else {
            prev = current
            current = current.next
        }
        isOdd = !isOdd
    }

    return head
}


if (require.main === module) {
    const list = createFromArray([1, 2, 3, 4, 5, 6, 7])
    assert.strict.equal(print(oddEvenList(list)), '1 -> 3 -> 5 -> 7 -> 2 -> 4 -> 6 -> X')
}
