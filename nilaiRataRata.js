const mat = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;


if(typeof mat === 'number' && typeof bahasaIndonesia === 'number' && typeof bahasaInggris === 'number' && typeof ipa === 'number' ){
    if( mat >= 0 || mat <=100 && bahasaIndonesia >=0 || bahasaInggris <= 100 && bahasaInggris >= 0 || bahasaInggris <=100
        && ipa >= 0 || ipa <= 100){
            let rataRata = (mat + bahasaIndonesia + bahasaInggris + ipa) / 4;
            
            rataRata <= 90 ?
                console.log("Grade = A \nRata Rata ="+ rataRata)
            : rataRata > 90 ?
                console.log("Grade = B \nRata Rata ="+ rataRata)
            : rataRata >80 ?
                console.log("Grade = C \nRata Rata ="+ rataRata)
            : rataRata >70 ?
                console.log("Grade = D \nRata Rata ="+ rataRata)
            :   console.log("Grade = E \nRata Rata ="+ rataRata)
        }else{
            console.log('Please Input in a valid range')
        }

}else{
    console.log('Data harus number')
}



// masukan nilai dengan urutan [mtk, bahasa indonesia,bahasa inggris,ipa]


