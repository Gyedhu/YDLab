export const swap = (array, current) => {
    [array[current], array[current + 1]] = [array[current + 1], array[current]];
    return array;
}