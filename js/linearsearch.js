let isFound=0;
let index=0;

function linearSearch(array,number){
    for(let i=0; i<array.length; i++){
        if(array[i]===number){
            index=i;
            isFound=1;

            break;
        }
    }
    if(isFound===1){
        return 'found in' + index + ' there in the array';
    }else{
        return index + 'is not there in the array';
    }
}