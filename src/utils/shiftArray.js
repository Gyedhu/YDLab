export const shiftArray = (array, current, change, limit) => {
    let previous = current;
    current += change;

    if (current > limit) {
        current = 0;
        limit--;
    }
    if (current < 0) current = limit;

    [array[previous], array[current]] = [array[current], array[previous]];
    return [array, current, limit];
} 