import { ListNode, createFromArray, print } from './common'
import assert from 'assert'

function isPalindrome(head: ListNode | null): boolean {
    const length = getLength(head)

    if (length <= 1) {
        return true
    }
    
    const middleIndex = Math.floor(length / 2)
    let index = 1
    let newHead = head

    // reverse first part
    while (index < middleIndex) {
        let temp = newHead
        newHead = head.next
        head.next = head.next?.next || null
        newHead.next = temp

        index++
    }
    // get pointer to start of non-reversed part
    let middlePointer = length % 2 === 0 ? head.next : head.next.next
    // compare reversed part to the end of list
    index = 1
    while (index <= middleIndex) {
        if (newHead.val !== middlePointer.val) {
            return false
        }
        newHead = newHead.next
        middlePointer = middlePointer.next
        index++
    }

    return true
}

function getLength(head: ListNode): number {
    let counter: number = 0
    let current: ListNode = head

    while (current) {
        counter += 1
        current = current.next
    }

    return counter
}

if (require.main === module) {
    assert.strict.equal(isPalindrome(null), false)
    assert.strict.equal(isPalindrome(createFromArray([1])), false)
    assert.strict.equal(isPalindrome(createFromArray([1, 2])), false)
    assert.strict.equal(isPalindrome(createFromArray([1, 2])), false)
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 3])), false)
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 1])), true)
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 2, 1])), true)
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 3, 2, 1])), true)
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 3, 3, 1])), false)
}
