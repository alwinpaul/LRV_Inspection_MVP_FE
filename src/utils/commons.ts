/* eslint-disable @typescript-eslint/no-explicit-any */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
    let timer = 0;
    return (...args: Parameters<T>): ReturnType<T> => {
        let result: any
        clearTimeout(timer)
        timer = setTimeout(() => {
            result = fn(...args)
        }, delay)
        return result
    }
}
