import { ListNode, createFromArray } from './common'
import assert from 'assert'

function isPalindrome(head: ListNode | null): boolean {
    const length = getasdasd


}

function getLength(head: ListNode): number {
    let counter: number = 0
    let current = head

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
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 1])), true)
    assert.strict.equal(isPalindrome(createFromArray([1, 2, 2, 1])), true)
}
