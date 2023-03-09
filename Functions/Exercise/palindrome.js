function palindrome(input) {

    for (let el of input) {
        let current = String(el);
        let reversed = current.split('').reverse().join('');

        if (current === reversed) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

}
palindrome([123, 323, 421, 121]);