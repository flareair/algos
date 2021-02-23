import { ListNode, createFromArray, printToConsole } from './common'

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 && !l2) {
        return null
    }

    if (!l1) {
        return l2
    }

    if (!l2) {
        return l1
    }

    const result: ListNode = {
        val: null,
        next: null
    }

    let p1 = l1
    let p2 = l2

    let p3 = result

    while (p1 && p2) {
        if (p1.val <= p2.val) {
            p3.next = p1
            p1 = p1.next
        } else {
            p3.next = p2
            p2 = p2.next
        }

        p3 = p3.next
    }

    if (p1) {
        p3.next = p1
    } else if (p2) {
        p3.next = p2
    }

    return result.next
}

if (require.main === module) {
    const l1 = createFromArray([1, 4, 7])
    const l2 = createFromArray([2, 3, 10])
    
    printToConsole(mergeTwoLists(l1, l2)) 
}
