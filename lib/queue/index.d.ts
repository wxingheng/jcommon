/**
 * @description: Queue 队列 class
 * @author: wuxh
 * @Date: 2021-08-24 11:19:07
 * @example: const queue = new Queue()
 */
export declare class Queue {
    private items;
    constructor(items: Array<never>);
    enqueue(element: never): void;
    dequeue(): void;
    front(): never;
    isEmpty(): boolean;
    size(): number;
    clear(): void;
    print(): void;
}
