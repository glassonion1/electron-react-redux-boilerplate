export const INCREMENT = Symbol('INCREMENT');
export const DECREMENT = Symbol('DECREMENT');

export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}
