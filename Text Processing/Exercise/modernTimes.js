function modernTimes(input) {

    let arr = input.split(" ");

    for (let el of arr) {
        if (el.startsWith("#") && el.length > 1) {
            let flag = true;
            let elToLower = el.toLowerCase();
            //console.log(elToLower);
            for (let i = 1; i < elToLower.length; i++) {
                if (elToLower.charCodeAt(i) < 97 || elToLower.charCodeAt(i) > 122) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                console.log(el.slice(1));
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');