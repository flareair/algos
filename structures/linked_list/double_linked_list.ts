import { ListNode, printToConsole } from './common'

interface DoubleListNode extends ListNode {
    next: DoubleListNode | null
    prev: DoubleListNode | null
}

class DoubleLinkedList {
    head: DoubleListNode | null = null
    tail: DoubleListNode | null = null

    getNode(index: number): DoubleListNode | null {
        let currentIndex = 0
        let node = this.head

        while(currentIndex < index) {
            node = node?.next || null
            currentIndex++
        }

        return node
    }

    get(index: number): number {
        const node = this.getNode(index)

        return node?.val ?? -1
    }

    addAtHead(val: number): void {
        const newHead: DoubleListNode = {
            val,
            next: this.head,
            prev: null
        }

        if (this.head) {
            this.head.prev = newHead
        }
        this.head = newHead

        if (!this.tail) {
            this.tail = this.head
        }
    }

    addAtTail(val: number): void {
        const newTail: DoubleListNode = {
            val,
            next: null,
            prev: this.tail
        }

        if (this.tail) {
            this.tail.next = newTail
        }
        this.tail = newTail

        if (!this.head) {
            this.head = this.tail
        }
    }

    addAtIndex(index: number, val: number): void {
        if (index === 0) {
            return this.addAtHead(val)
        }

        const nodeBefore = this.getNode(index - 1)

        if (!nodeBefore) {
            return
        }

        if (!nodeBefore.next) {
            return this.addAtTail(val)
        }

        const temp = nodeBefore.next
        const newNode: DoubleListNode = {
            val,
            next: temp,
            prev: nodeBefore
        }
        nodeBefore.next = newNode
        temp.prev = newNode
    }

    deleteAtIndex(index: number): void {
        const nodeToRemove = this.getNode(index)

        if (!nodeToRemove) {
            return
        }

        const next = nodeToRemove.next
        const prev = nodeToRemove.prev

        if (!prev && !next) {
            this.head = null
            this.tail = null
            return
        }

        if (!prev) {
            this.head = nodeToRemove.next
            this.head.prev = null
            return
        }

        if (!next) {
            this.tail = nodeToRemove.prev
            this.tail.next = null
            return
        }

        prev.next = next
        next.prev = prev
    }
}

if (require.main === module) {
    const list = new DoubleLinkedList()

    list.addAtTail(2)
    list.addAtHead(1)
    list.addAtTail(3)

    printToConsole(list.head)
    printToConsole(list.tail)

    console.log(list.get(2))
    console.log(list.get(5))
    console.log(list.get(0))
    console.log(list.get(1))

    list.addAtIndex(3, 5)
    list.addAtIndex(0, 0)
    list.addAtIndex(4, 4)

    printToConsole(list.head)

    list.deleteAtIndex(0)
    list.deleteAtIndex(4)
    list.deleteAtIndex(2)

    printToConsole(list.head)
}