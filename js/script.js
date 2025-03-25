document.addEventListener("DOMContentLoaded", function(){
    const inputSisiLuasPersegi = document.getElementById("input-sisi-luas");
    const buttonCalculateLuasPersegi = document.getElementById("button-calculate-luas");
    const buttonResetLuasPersegi = document.getElementById("button-reset-luas");
    const resultLuas = document.getElementById("result-luas");

    const inputSisiKelilingPersegi = document.getElementById("input-sisi-keliling");
    const buttonCalculateKelilingPersegi = document.getElementById("button-calculate-keliling");
    const buttonResetKelilingPersegi = document.getElementById("button-reset-keliling");
    const resultKeliling = document.getElementById("result-keliling");

    buttonCalculateLuasPersegi.addEventListener("click", function(){
        let sisiPersegi = parseFloat(inputSisiLuasPersegi.value);
        if(sisiPersegi <= 0 || isNaN(sisiPersegi)){
            alert("Input yang diberikan tidak valid !!");
            resultLuas.innerHTML= `<span style="color:red;">Masukkan nilai sisi yang valid!!</span>`;
            return;
        }

        let hasilLuas = sisiPersegi * 2
        resultLuas.innerHTML =`
        L = S x S<br>
        L = ${sisiPersegi} x ${sisiPersegi}<br>
        L = ${hasilLuas}`;
    })

    buttonResetLuasPersegi.addEventListener("click", function(){
        inputSisiLuasPersegi.value = "";
        resultLuas.innerHTML = "";
    })

    buttonCalculateKelilingPersegi.addEventListener("click", function(){
        let kelilingPersegi = parseFloat(inputSisiKelilingPersegi.value);
        if(kelilingPersegi <= 0 || isNaN(kelilingPersegi)){
            alert("Input yang diberikan tidak valid !!");
            resultKeliling.innerHTML= `<span style="color:red;">Masukkan nilai keliling yang valid!!</span>`; 
            return;
        }
        
        let hasilKeliling = 4 * kelilingPersegi;
        resultKeliling.innerHTML = `
        K = 4 x S<br>
        K = 4 x ${kelilingPersegi}<br>
        K = ${hasilKeliling}`;
    })

    buttonResetKelilingPersegi.addEventListener("click", function(){
        inputSisiKelilingPersegi.value = "";
        resultKeliling.innerHTML = "";
    })
})
