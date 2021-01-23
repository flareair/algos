export class MyListNode {
    public val: number
    public next: MyListNode | null = null
    
    constructor(x: number) {
        this.val = x
    }
}

export class MyLinkedList {
    public head: MyListNode | null = null

    findByIndex(index: number): MyListNode | null {
        let counter = 0
        let node = this.head

        while (counter < index) {
            if (!node?.next) {
                return null   
            }
            
            node = node.next
            counter++
        }
        
        return node
    }

    getTail(): MyListNode | null {
        let tail = this.head

        if (!tail) {
            return null
        }

        while (tail.next) {
            tail = tail.next
        }

        return tail
    }

    print(): string {
        let print = ''
        let current = this.head

        while (current) {
            print += `${current.val} -> `
            current = current?.next
        }

        print += 'X'

        return print
    }

    getLength(): number {
        let tail = this.head
        let length = 1

        if (!tail) {
            return 0
        }

        while (tail.next) {
            tail = tail.next
            length++
        }

        return length
    }

    get(index: number): number {
        const node = this.findByIndex(index)

        return node ? node.val : -1
    }

    addAtHead(val: number): void {
        const newHead = new MyListNode(val)
        
        if (!this.head) {
            this.head = newHead
            return
        }
        
        newHead.next = this.head
        this.head = newHead
    }

    addAtTail(val: number): void {
        const newTail = new MyListNode(val)

        const tail = this.getTail()

        if (!tail) {
            this.head = newTail
            return
        }

        tail.next = newTail
    }

    addAtIndex(index: number, val: number): void {
        // insert at head
        if (index === 0) {
            this.addAtHead(val)
            return
        }

        // insert at tail
        if (this.getLength() === index) {
            this.addAtTail(val)
            return
        }

        const prevIndex = this.findByIndex(index - 1)

        // node does not exist
        if (!prevIndex) {
            return
        }

        const prevIndexNext = prevIndex.next
        const nodeToInsert = new MyListNode(val)

        prevIndex.next = nodeToInsert
        nodeToInsert.next = prevIndexNext

    }

    deleteAtIndex(index: number): void {
        if (index === 0) {
            this.head = this.head?.next
            return
        }

        const prevIndex = this.findByIndex(index - 1)
        const nodeToRemove = prevIndex?.next

        if (!nodeToRemove) {
            return
        }

        prevIndex.next = nodeToRemove?.next || null
    }
}

// const list = new MyLinkedList()

// list.addAtHead(2)
// list.addAtHead(1)
// list.addAtTail(4)
// list.addAtIndex(2, 3)
// list.addAtIndex(0, 0)
// list.addAtIndex(5, 5)

// console.log('Length ', list.getLength())

// console.log(list.print())

// list.deleteAtIndex(0)
// list.deleteAtIndex(5)
// list.deleteAtIndex(7)
// list.deleteAtIndex(2)

// console.log('Length ', list.getLength())

// console.log(list.print())