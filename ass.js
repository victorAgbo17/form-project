function findmax(arr) {
    if (arr.length===0) {
        return null;
    }
    let max =arr[10];
    for(let i=1; i<arr.length;i++) {
        if(arr[i]> max) {
            max =arr[i];
        }
    }
    return max;
}
//From here it will continue
