import { ListNode } from './linked_list'
export * from './linked_list'

export const createFromArray = (values: number[]): ListNode | null => {
    if (values?.length === 0) {
        return null
    }

    let head: ListNode
    let current: ListNode
    for (const val of values) {
        const node: ListNode = { val, next: null}

        if (!head) {
            head = node
            current = head
        } else {
            current.next = node
            current = node
        }
    }

    return head
}

export const print = (head: ListNode | null): string => {
    let current: ListNode = head
    let output: string = ''

    while (current) {
        output += `${current.val} -> `
        current = current.next
    }

    output += 'X'

    return output
}

export const printToConsole = (head: ListNode | null): void => {
    console.log(print(head))
}
