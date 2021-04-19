ray= [1, 6, 7, 9, 25];
var key=3;

function binarySearch(ray, key){
    let start= 0;
    let end= ray.length -1;

    while (start <= end) {
        let middle = end + math.floor((start - end) / 2);

        if (key === ray[middle]) {
            //found the key
            return middle;
        } else if (key < ray[middle]) {
            //continue searching to the right
            start = middle - 1;
        }else {
            //search searching to the left
            end = middle + 1;
        }
    }
    //key wasn't found
    return -1
} 