const nilaiUnRata = (data) => {
    let dataLength = data.length -1;
    let hasil = 0;
    for(let i =0; i <= dataLength; i++){
        hasil += data[i]; 
    }

    let rataRata = hasil / data.length

    rataRata <= 90 ?
        console.log("Grade = A \nRata Rata ="+ rataRata)
    : rataRata > 90 ?
        console.log("Grade = B \nRata Rata ="+ rataRata)
    : rataRata >80 ?
        console.log("Grade = C \nRata Rata ="+ rataRata)
    : rataRata >70 ?
        console.log("Grade = D \nRata Rata ="+ rataRata)
    :   console.log("Grade = E \nRata Rata ="+ rataRata)
    
}


// masukan nilai dengan urutan [mtk, bahasa indonesia,bahasa inggris,ipa]
nilaiUnRata([80,90,89,69]);

