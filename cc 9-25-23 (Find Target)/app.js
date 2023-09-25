// arr = [1,2,3,4,5,6,7]
// target = 9

function findTarget(arr){
    let obj = {}
    for(let i=0; i<arr.length; i++){
        if(obj[target-arr[i]]){
            return [obj[target-arr[i]], i]
        } else {
            obj[arr[i]] = i
        }
    }
}