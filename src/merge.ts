export function merge(collection_1: number[], collection_2: number[]) : number[] {

    //declare result array
    const result: number[] = [];

    //declare 2 index pointer
    let i = 0;
    let j = 0;

    //while there are remaining item in col1 and col2 compare and push lower intem
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            result.push(collection_1[i])
            i++
        } else {
            result.push(collection_2[j])
            j++
        }
    }
    

    //push remaining array
    while (i < collection_1.length) {
        result.push(collection_1[i])
        i++
    }
    while (j < collection_2.length) {
        result.push(collection_2[j])
        j++
    }

    return result
}
