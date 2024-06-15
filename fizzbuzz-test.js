// Buat loop yang mencetak angka 1-100, JIKA kelipatan 3 maka outputnya "Fizz" , JIKA kelipatan 5 outputnya "Buzz" dan JIKA kelipatan 3 dan 5 keluarkan 'FizzBuzz'

//mendefinisikan Fungsi FizzBuzz Yang Menerima Parameter a
function FizzBuzz(a) {
    // loop dari 1 sampai a
    for (let i = 1; i <= a; i++) {
            // Jika `i` habis dibagi 15 cetak "FizzBuzz"
        if (i % 15 === 0) {
            console.log("FizzBuzz");
               // Jika `i` habis dibagi 3 cetak "Fizz"
        } else if (i % 3 === 0) {
            console.log("Fizz");
             // Jika `i` habis dibagi 5 cetak "Buzz"
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            //jika i tidak habis dibagi 3 atau 5, cetak nilai i
            console.log(i);
        }
    }
}

FizzBuzz(100);
