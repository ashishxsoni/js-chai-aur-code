function sanitize(msg){
             
let arr = Array.from(msg);
for( let i=0;i<msg.length;i++){
    arr[i]= msg.charAt(i)==='x' ?'*':msg.charAt(i);
}
    arr=arr.join("");
    return arr;

}
console.log(sanitize("1/2x3+4-2"));