import { ListNode, createFromArray, print } from './common'
import assert from 'assert'

function isPalindrome(head: ListNode | null): boolean {
    let p2 = getMiddle(head)
    let p1 = head

    p2 = reverse(p2)

    while (p2) {
        if (p1.val !== p2.val) {
            return false
        }

        p1 = p1.next
        p2 = p2.next
    }

    return true
}

function getMiddle(head: ListNode) {
    let slow = head
    let fast = head

    while (fast) {
        slow = slow.next
        fast = fast.next?.next
    }

    return slow
}

function reverse(head: ListNode | null): ListNode | null {
    let current = head
    let prev = null

    // very clever
    while (current) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}

if (require.main === module) {
    assert.strict.equal(isPalindrome(null), true)
    assert.strict.equal(isPalindrome(createFromArray([1])), true)
    assert.strict.equal(isPalindrome(createFromArray([1, 2])), false)
    assert.strict.equal(isPalindrome(createFromArray([1, 2])), false)
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 3])), false)
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 1])), true)
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 2, 1])), true)
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 3, 2, 1])), true)
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 3, 3, 1])), false)
}
