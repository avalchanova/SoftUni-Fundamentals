function matrix(times) {
    let matrix = [];

    for (let i = 0; i < times; i++) {
        let row = [];

        for (let k = 0; k < times; k++) {
            row.push(times);
        }
        // console.log(row);
        matrix.push(row.join(' '));
        //console.log(matrix);
    }
    console.log(matrix.join('\n'));
}
matrix(3);