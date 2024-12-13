// Code your solution here
function findMatching(arr, str) {
    let newArr = []
    arr.filter(function (item){
        if(item.toLowerCase() == str.toLowerCase()){
            newArr.push(item)
        }
    })
    return newArr
}


//function to return a new array with the drivers names matching the letters that have been passed
function fuzzyMatch(arr, str) {
    let newArr = []
    arr.filter((item)=>{
        if (item.substring(0, str.length) == str){
            newArr.push(item)
        }
    })
    return newArr
} 

//Function that takes in an array of an object that returns a new list of matching names and the string provided
function  matchName(arr, str) {
    let newArr = []
    arr.filter((item)=>{
        if(item.name == str){
            newArr.push(item)
        }
    })
    return newArr
}