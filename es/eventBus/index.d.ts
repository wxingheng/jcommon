/**
 * @description: EventBus  class
 * @author: wuxh
 * @Date: 2021-08-24 11:19:07
 * @example: const eventBus = new EventBus()
 */
export declare class EventBus {
    private listeners;
    private maxListener;
    constructor();
    addListener(event: string, cb: Function): void;
    emit(event: string): void;
    getListeners(event: string): any;
    setMaxListeners(maxListener: number): void;
    removeListener(event: string, listener: Function): void;
    removeAllListener(event: string): void;
    once(event: string, cb: Function): void;
}
