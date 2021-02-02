export const createArray = (arraySize) => { //create array
    let array = [];
    for (let i = 0; i < arraySize; i++) {
        array[i] = Math.trunc(Math.random() * 15);
    }
    return array;
};
export const summ = (arrayNeededToSumm) => { // summ of all arrays elements
    let summ = 0;
    for (let i = 0; i < arrayNeededToSumm.length; i++) {
        summ += arrayNeededToSumm[i];
    }
    return summ;
};
export const maximumElement = (arrayNeededToSearchMaximum) => Math.max.apply(null, arrayNeededToSearchMaximum);
export const minimalElement = (arrayNeededToSearchMinimal) => Math.min.apply(null, arrayNeededToSearchMinimal);
export const squareArray = (arrayToSquared) => { // square of elements
    let squareArray = [];
    for (let i = 0; i < arrayToSquared.length; i++) {
        squareArray[i] = arrayToSquared[i] * arrayToSquared[i];
    }
    return squareArray;
};
export const sqrtArray = (arrayToSqrt) => { // sqrt of elements
    let sqrtArray = [];
    for (let i = 0; i < arrayToSqrt.length; i++) {

        sqrtArray[i] = `~ ${Math.trunc(Math.sqrt(arrayToSqrt[i]))}`;
    }
    return sqrtArray;
};
export const сheckOf5 = (arrayToCheck) => { // check on '5' in array
    let result = '5 is not found in array';
    for (let i = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] === 5) {

            result = `5 is found`;
        }

    }
    return result;
};
export const checkOfTwoinRow = (arrayToCheck) => { // check on TwoinRow 
    let result = 'Array no have Two in Row equal elements';
    for (let i = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] === arrayToCheck[i + 1]) {
            result = 'Array have element two in Row';
        }
    }
    return result;
};
export const reverseArray = (arrayToReverse) => arrayToReverse.reverse(); //reverse function