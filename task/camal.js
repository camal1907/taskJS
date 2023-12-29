
const bir=prompt("reqem daxil et")
const operator=prompt("operatoru daxil et")
const iki=prompt("reqem daxil et")

if (!isNaN(bir) && !isNaN(iki)) {

switch (operator) {
    case '+': 
        sonuc = bir + iki; 
        break;
    case '-': 
        sonuc = bir - iki; 
        break;
    case '*':
         sonuc= bir * iki;
         break;
         case '/':
            sonuc = (iki !== 0) ? bir / iki : "Hata: Sıfıra bölme yapılamaz.";
            break;
        default:
            console.log("Geçersiz operatör.");
            break;
    }
    if (sonuc !== undefined) {
        console.log(`Sonuç: ${sonuc}`);
    }
} else {
    console.log("Hatalı giriş. Lütfen geçerli sayıları girin.");
}





let Ay = prompt("Ay ismi girin"); 

let ayNumber;
switch (Ay) {
    case 'yanvar':
        ayNumber = 1;
        break;
    case 'fevral':
        ayNumber = 2;
        break;
    case 'mart':
        ayNumber = 3;
        break;
    case 'aprel':
        ayNumber = 4;
        break;
    default:
        console.log("Geçersiz ay ismi.");
        break;
}

// Eğer geçerli bir ay ismi girildiyse, numarasını ekrana yazdır
if (ayNumber !== undefined) {
    console.log(`Girilen ayın numarası: ${ayNumber}`);
}

        
    



