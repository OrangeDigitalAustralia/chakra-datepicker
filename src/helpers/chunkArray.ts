/**
 * Returns an array with arrays of the given size.
 *
 * @param arr {Array} array to split
 * @param size {Integer} Size of every group
 */
export function chunkArray<T>(arr: T[], size: number) {
    let index = 0;
    const arrayLength = arr.length;
    const tempArray = [];

    for (index = 0; index < arrayLength; index += size) {
        const chunk = arr.slice(index, index + size);
        // Do something if you want with the group
        tempArray.push(chunk);
    }

    return tempArray;
}
