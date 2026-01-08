function reverseString(str){
    let tempReverseStr="";
    for(i=str.length-1; i>=0; i--){
        tempReverseStr += str[i];
        
    }
    return tempReverseStr;
}
result = reverseString("hello";)
console.log(result)