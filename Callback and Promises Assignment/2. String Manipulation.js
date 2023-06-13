function manipulateString(str, logSting){
    console.log(`Current String is : ${str}`);
    return logSting(str);
}

function logSting(str){
    mStr =  str.toUpperCase();
    return `The manipulated string is: ${mStr}`;
}

console.log(manipulateString("Hello, world!", logSting));