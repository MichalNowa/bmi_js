inter = ["Wygłodzenie", "Wychudzenie", "Niedowaga", "Waga prawidłowa", "Nadwaga", "1 stopień otyłości", "2 stopień otyłości", "3 stopień otyłości"];


const waga_html = document.getElementById("waga");
const button_html = document.getElementById("button");
const wzrost_html = document.getElementById("wzrost");
let wynik_hmtl = document.getElementById("wynik");
let inter_html = document.getElementById("inter")

button_html.addEventListener("click", ()=>{

    let res = (waga_html.value/Math.pow(wzrost_html.value, 2) * 10000).toFixed(2);
    wynik_hmtl.innerHTML = res;

    if(res < 16)
    {
        inter_html.innerHTML = inter[0];
    }
    else if(res >= 16 && res < 17)
    {
        inter_html.innerHTML = inter[1];
    }
    else if(res >= 17 && res < 18.5)
    {
        inter_html.innerHTML = inter[2];
    }
    else if(res >= 18.5 && res < 25)
    {
        inter_html.innerHTML = inter[3];
    }
    else if(res >= 25 && res < 30)
    {
        inter_html.innerHTML = inter[4];
    }
    else if(res >= 30 && res < 35)
    {
        inter_html.innerHTML = inter[5];
    }
    else if(res >= 35 && res < 40)
    {
        inter_html.innerHTML = inter[6];
    }
    else if(res > 40)
    {
        inter_html.innerHTML = inter[7];
    }

});