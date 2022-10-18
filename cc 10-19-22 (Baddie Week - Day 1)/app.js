/*
This week we'll be nurturing our inner code weenies and working on bringing up the quality of code and work. Remember, be proud of what you create but always be open to improvement!

Today's challenge is to simplify the example function below based on what we've discussed today. I also challenge you to look at some recent functions you've written and apply these same principles to those!

function myExampleFunction(arr) {
    if (arr != null) {
        if (arr.length !== 0) {
            if (arr[0].length !== 0) {
                if (arr.length > 10) {
                    arr.push('maximum')
                } else if (arr.length === 10) {
                    arr.push('maximum')
                } else {
                    if (arr[0] === 'must be maximum') {
                        arr.push('failure')
                    } else if (arr[0] === 'flexible') {
                        arr.push('success')
                    }
                }
            }
        }
    }
    return arr
}

*/

 
 

//solution
function myExampleFunction(arr) {
    if (arr != null && arr.length !== 0 && arr[0].length !== 0) {
        
            if (arr.length > 10) {
                arr.push('maximum')
            } else if (arr.length === 10) {
                arr.push('maximum')
            } else {
                if (arr[0] === 'must be maximum') {
                    arr.push('failure')
                } else if (arr[0] === 'flexible') {
                    arr.push('success')
                }
            }
        
    }
    return arr
}
