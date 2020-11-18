const triangle = (num) => {
    let hasil = '';
    if (typeof num === 'number') {
        for (let i = num; i >= 0; i--) {
            for (let a = i; a >= 0; a--) {
                hasil += a + 1
            }
            hasil += '\n';
        }
    } else {
        hasil += 'Data harus number'
    }
    console.log(hasil);
}


triangle(3);