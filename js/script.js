document.addEventListener("DOMContentLoaded", function(){
    // Fungsi Kalkulator Persegi

    // Deklarasi Variabel Luas Persegi
    const inputSisiLuasPersegi = document.getElementById("input-sisi-luas-persegi");
    const buttonCalculateLuasPersegi = document.getElementById("button-calculate-luas-persegi");
    const buttonResetLuasPersegi = document.getElementById("button-reset-luas-persegi");
    const resultLuasPersegi = document.getElementById("result-luas-persegi");

    // Deklarasi Variabel Keliling Persegi
    const inputSisiKelilingPersegi = document.getElementById("input-sisi-keliling-persegi");
    const buttonCalculateKelilingPersegi = document.getElementById("button-calculate-keliling-persegi");
    const buttonResetKelilingPersegi = document.getElementById("button-reset-keliling-persegi");
    const resultKelilingPersegi = document.getElementById("result-keliling-persegi");

    // Fungsi button perhitungan luas persegi
    buttonCalculateLuasPersegi.addEventListener("click", function(){
        let sisiPersegi = parseFloat(inputSisiLuasPersegi.value);
        if(sisiPersegi <= 0 || isNaN(sisiPersegi)){
            alert("Input yang diberikan tidak valid !!");
            resultLuasPersegi.innerHTML= `<span style="color:red;">Masukkan nilai sisi yang valid!!</span>`;
            return;
        }
        // Rumus Luas Persegi
        let hasilLuasPersegi = sisiPersegi * 2
        resultLuasPersegi.innerHTML =`
        L = S x S<br>
        L = ${sisiPersegi} x ${sisiPersegi}<br>
        L = ${hasilLuasPersegi}`;
    })

    // Fungsi button reset perhitungan luas persegi
    buttonResetLuasPersegi.addEventListener("click", function(){
        inputSisiLuasPersegi.value = "";
        resultLuasPersegi.innerHTML = "";
    })

    // Fungsi button perhitungan keliling persegi
    buttonCalculateKelilingPersegi.addEventListener("click", function(){
        let sisiKelilingPersegi = parseFloat(inputSisiKelilingPersegi.value);
        if(sisiKelilingPersegi <= 0 || isNaN(sisiKelilingPersegi)){
            alert("Input yang diberikan tidak valid !!");
            resultKelilingPersegi.innerHTML= `<span style="color:red;">Masukkan nilai keliling yang valid!!</span>`; 
            return;
        }
        
        // Rumus Keliling Persegi
        let hasilKelilingPersegi = 4 * sisiKelilingPersegi;
        resultKelilingPersegi.innerHTML = `
        K = 4 x S<br>
        K = 4 x ${sisiKelilingPersegi}<br>
        K = ${hasilKelilingPersegi}`;
    })

    // Fungsi button reset perhitungan keliling persegi
    buttonResetKelilingPersegi.addEventListener("click", function(){
        inputSisiKelilingPersegi.value = "";
        resultKelilingPersegi.innerHTML = "";
    })

    // Fungsi Kalkulator Persegi Panjang

    // Deklarasi Variabel Luas Persegi Panjang
    const inputPanjangLuasPersegiPanjang = document.getElementById("input-panjang-luas-persegi-panjang");
    const inputLebarLuasPersegiPanjang = document.getElementById("input-lebar-luas-persegi-panjang");
    const buttonCalculateLuasPersegiPanjang = document.getElementById("button-calculate-luas-persegi-panjang");
    const buttonResetLuasPersegiPanjang = document.getElementById("button-reset-luas-persegi-panjang");
    const resultLuasPersegiPanjang = document.getElementById("result-luas-persegi-panjang");

    // Deklarasi Variabel Keliling Persegi Panjang
    const inputPanjangKelilingPersegiPanjang = document.getElementById("input-panjang-keliling-persegi-panjang");
    const inputLebarKelilingPersegiPanjang = document.getElementById("input-lebar-keliling-persegi-panjang");
    const buttonCalculateKelilingPersegiPanjang = document.getElementById("button-calculate-keliling-persegi-panjang");
    const buttonResetKelilingPersegiPanjang = document.getElementById("button-reset-keliling-persegi-panjang");
    const resultKelilingPersegiPanjang = document.getElementById("result-keliling-persegi-panjang");
    
    // Fungsi button calculate luas Persegi Panjang
    buttonCalculateLuasPersegiPanjang.addEventListener("click", function(){
        let lebarLuasPersegiPanjang = inputLebarLuasPersegiPanjang.value;
        let panjangLuasPersegiPanjang = inputPanjangLuasPersegiPanjang.value;

        if(lebarLuasPersegiPanjang <= 0 || isNaN(lebarLuasPersegiPanjang) || 
        panjangLuasPersegiPanjang <=0 || isNaN(panjangLuasPersegiPanjang)){
            alert("Input yang diberikan tidak valid !!");
            resultLuasPersegiPanjang.innerHTML = `<span style="color:red;">Masukkan nilai panjang dan lebar yang valid!!</span>`; 
            return;
        }
        
        // Rumus Luas Persegi Panjang
        let hasilLuasPersegiPanjang = panjangLuasPersegiPanjang * lebarLuasPersegiPanjang; 
        resultLuasPersegiPanjang.innerHTML = `
        L = p x l<br>
        L = ${panjangLuasPersegiPanjang} x ${lebarLuasPersegiPanjang}<br>
        L = ${hasilLuasPersegiPanjang}`;
    })

    // Fungsi button reset luas Persegi Panjang
    buttonResetLuasPersegiPanjang.addEventListener("click", function(){
        inputLebarLuasPersegiPanjang.value = "";
        inputPanjangLuasPersegiPanjang.value = "";
        resultLuasPersegiPanjang.innerHTML = "";
    })

    // Fungsi button calculate Keliling Persegi Panjang
    buttonCalculateKelilingPersegiPanjang.addEventListener("click", function(){
        let lebarKelilingPersegiPanjang = inputLebarKelilingPersegiPanjang.value;
        let panjangKelilingPersegiPanjang = inputPanjangKelilingPersegiPanjang.value;
        if(lebarKelilingPersegiPanjang <= 0 || isNaN(lebarKelilingPersegiPanjang) ||
        panjangKelilingPersegiPanjang <= 0 || isNaN(panjangKelilingPersegiPanjang)){
            alert("Input yang diberikan tidak valid !!");
            resultKelilingPersegiPanjang.innerHTML = `<span style="color:red;">Masukkan nilai panjang dan lebar yang valid!!</span>`; 
            return;
        }

        // Rumus Keliling Persegi Panjang
        let hasilKelilingPersegiPanjang = 2 * (panjangKelilingPersegiPanjang + lebarKelilingPersegiPanjang);
        resultKelilingPersegiPanjang.innerHTML = `
        K = 2 x (p + l)<br>
        K = 2 x ${panjangKelilingPersegiPanjang} + ${lebarKelilingPersegiPanjang}<br>
        K = ${hasilKelilingPersegiPanjang}`;
    })

    // Button reset keliling Persegi Panjang
    buttonResetKelilingPersegiPanjang.addEventListener("click", function(){
        inputPanjangKelilingPersegiPanjang.value = "";
        inputLebarKelilingPersegiPanjang.value = "";
        resultKelilingPersegiPanjang.innerHTML = "";
    })
})
