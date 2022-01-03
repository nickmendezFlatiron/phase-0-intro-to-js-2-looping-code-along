// Code your solutions in this file
function writeCards(array,event){
    const newArray = [];
    for(let i = 0, n = array.length; i < n ; i++){
       newArray[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }
    return newArray;
}

function countDown (int) {
    while (int >= 0) {
        console.log(int);
        int--;
    }
}