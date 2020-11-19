const triangle = (num) => {
    let hasil = '';
    if (typeof num === 'number') {
        for (let i = num; i >= 1; i--) {
            for (let a = 1; a <= i; a++) {
                hasil += a 
            }
            hasil += '\n';
        }
    } else {
        hasil += 'Data harus number'
    }
    console.log(hasil);
}


triangle(5);