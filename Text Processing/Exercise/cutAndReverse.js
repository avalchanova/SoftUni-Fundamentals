function cutAndReverse(str) {
    let l = str.length / 2;
    //console.log(l);
    let lEND = str.length;
    let str1 = str.length / 2;
    let arr = str.split("");
    // console.log(arr);
    // console.log(l);
    let reversed = arr.reverse();
    //console.log(reversed);
    let arr1 = reversed.splice(l * (-1));
    console.log(arr1.join(""));
    let arr2 = reversed.splice(0, l);
    console.log(arr2.join(""));

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');