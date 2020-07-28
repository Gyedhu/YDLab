export const getLocation = (array, index, width, gap) => {

    let element = array[index];
    let percentage = element * 100 / Math.max(...array);
    let barHeight = 250;
    let x = (width + gap) * index;
    let y = barHeight - (percentage / 100 * barHeight);

    return [x, y];
}